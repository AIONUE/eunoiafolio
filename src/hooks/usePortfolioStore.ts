import { useState, useEffect } from "react";
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  deleteDoc, 
  doc, 
  setDoc, 
  query, 
  orderBy,
  getDoc
} from "firebase/firestore";
import { db } from "../lib/firebase";

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
}

const DEFAULT_WORKS: WorkItem[] = [
  { id: "1", title: "Project Alpha", category: "WORK", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" },
  { id: "2", title: "Project Beta", category: "WORK", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" },
];

export function usePortfolioStore() {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [vinylAsset, setVinylAsset] = useState("https://www.transparenttextures.com/patterns/plastic-wrap.png");
  const [tapeAsset, setTapeAsset] = useState("");
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [gradProjPosts, setGradProjPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sync Settings
    const unsubSettings = onSnapshot(doc(db, "settings", "global"), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.vinylAsset) setVinylAsset(data.vinylAsset);
        if (data.tapeAsset) setTapeAsset(data.tapeAsset);
        if (data.profileImage) setProfileImage(data.profileImage);
      }
    });

    // Sync Works
    const qWorks = query(collection(db, "works"), orderBy("createdAt", "desc"));
    const unsubWorks = onSnapshot(qWorks, (snapshot) => {
      const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as WorkItem));
      setWorks(items.length > 0 ? items : DEFAULT_WORKS);
    });

    // Sync Blog
    const qBlog = query(collection(db, "blog"), orderBy("createdAt", "desc"));
    const unsubBlog = onSnapshot(qBlog, (snapshot) => {
      const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as BlogPost));
      setBlogPosts(items);
    });

    // Sync GradProj
    const qGrad = query(collection(db, "gradproj"), orderBy("createdAt", "desc"));
    const unsubGrad = onSnapshot(qGrad, (snapshot) => {
      const items = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as BlogPost));
      setGradProjPosts(items);
      setLoading(false);
    });

    return () => {
      unsubSettings();
      unsubWorks();
      unsubBlog();
      unsubGrad();
    };
  }, []);

  const updateSettings = async (updates: Partial<{ vinylAsset: string; tapeAsset: string; profileImage: string }>) => {
    try {
      await setDoc(doc(db, "settings", "global"), updates, { merge: true });
    } catch (error) {
      console.error("Error updating settings:", error);
    }
  };

  const addWork = async (work: Omit<WorkItem, "id">) => {
    try {
      await addDoc(collection(db, "works"), {
        ...work,
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error("Error adding work:", error);
    }
  };

  const deleteWork = async (id: string) => {
    try {
      await deleteDoc(doc(db, "works", id));
    } catch (error) {
      console.error("Error deleting work:", error);
    }
  };

  const addBlogPost = async (post: Omit<BlogPost, "id" | "date">) => {
    try {
      await addDoc(collection(db, "blog"), {
        ...post,
        date: new Date().toLocaleDateString(),
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error("Error adding blog post:", error);
    }
  };

  const deleteBlogPost = async (id: string) => {
    try {
      await deleteDoc(doc(db, "blog", id));
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  const addGradProjPost = async (post: Omit<BlogPost, "id" | "date">) => {
    try {
      await addDoc(collection(db, "gradproj"), {
        ...post,
        date: new Date().toLocaleDateString(),
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error("Error adding grad proj:", error);
    }
  };

  const deleteGradProjPost = async (id: string) => {
    try {
      await deleteDoc(doc(db, "gradproj", id));
    } catch (error) {
      console.error("Error deleting grad proj:", error);
    }
  };

  return { 
    works, addWork, deleteWork, 
    vinylAsset, setVinylAsset: (val: string) => updateSettings({ vinylAsset: val }), 
    tapeAsset, setTapeAsset: (val: string) => updateSettings({ tapeAsset: val }),
    profileImage, setProfileImage: (val: string) => updateSettings({ profileImage: val }),
    blogPosts, addBlogPost, deleteBlogPost,
    gradProjPosts, addGradProjPost, deleteGradProjPost,
    loading
  };
}
