import { useState, useEffect } from "react";

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
  const [works, setWorks] = useState<WorkItem[]>(() => {
    const saved = localStorage.getItem("portfolio_works");
    return saved ? JSON.parse(saved) : DEFAULT_WORKS;
  });

  const [vinylAsset, setVinylAsset] = useState<string>(() => {
    return localStorage.getItem("portfolio_vinyl") || "https://www.transparenttextures.com/patterns/plastic-wrap.png";
  });

  const [tapeAsset, setTapeAsset] = useState<string>(() => {
    return localStorage.getItem("portfolio_tape") || "";
  });

  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem("portfolio_profile") || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop";
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem("portfolio_blog");
    return saved ? JSON.parse(saved) : [];
  });

  const [gradProjPosts, setGradProjPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem("portfolio_gradproj");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("portfolio_works", JSON.stringify(works));
  }, [works]);

  useEffect(() => {
    localStorage.setItem("portfolio_vinyl", vinylAsset);
  }, [vinylAsset]);

  useEffect(() => {
    localStorage.setItem("portfolio_tape", tapeAsset);
  }, [tapeAsset]);

  useEffect(() => {
    localStorage.setItem("portfolio_profile", profileImage);
  }, [profileImage]);

  useEffect(() => {
    localStorage.setItem("portfolio_blog", JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem("portfolio_gradproj", JSON.stringify(gradProjPosts));
  }, [gradProjPosts]);

  const addWork = (work: Omit<WorkItem, "id">) => {
    const newWork = { ...work, id: Date.now().toString() };
    setWorks((prev) => [newWork, ...prev]);
  };

  const deleteWork = (id: string) => {
    setWorks((prev) => prev.filter((w) => w.id !== id));
  };

  const addBlogPost = (post: Omit<BlogPost, "id" | "date">) => {
    const newPost = { 
      ...post, 
      id: Date.now().toString(),
      date: new Date().toLocaleDateString()
    };
    setBlogPosts((prev) => [newPost, ...prev]);
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const addGradProjPost = (post: Omit<BlogPost, "id" | "date">) => {
    const newPost = { 
      ...post, 
      id: Date.now().toString(),
      date: new Date().toLocaleDateString()
    };
    setGradProjPosts((prev) => [newPost, ...prev]);
  };

  const deleteGradProjPost = (id: string) => {
    setGradProjPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return { 
    works, addWork, deleteWork, 
    vinylAsset, setVinylAsset, 
    tapeAsset, setTapeAsset,
    profileImage, setProfileImage,
    blogPosts, addBlogPost, deleteBlogPost,
    gradProjPosts, addGradProjPost, deleteGradProjPost
  };
}
