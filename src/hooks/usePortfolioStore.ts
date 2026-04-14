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

  const [vinylAsset] = useState<string>("/plastic.png");
  const [tapeAsset] = useState<string>("/tape.png");
  const [profileImage] = useState<string>("/profile.jpg");

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem("portfolio_blog");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("portfolio_works", JSON.stringify(works));
  }, [works]);

  useEffect(() => {
    localStorage.setItem("portfolio_blog", JSON.stringify(blogPosts));
  }, [blogPosts]);

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

  return { 
    works, addWork, deleteWork, 
    vinylAsset, 
    tapeAsset,
    profileImage,
    blogPosts, addBlogPost, deleteBlogPost
  };
}
