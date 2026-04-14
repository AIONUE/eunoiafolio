import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePortfolioStore } from "@/src/hooks/usePortfolioStore";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("WORK");
  const [newImageUrl, setNewImageUrl] = useState("");
  
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState("");

  const [gradTitle, setGradTitle] = useState("");
  const [gradContent, setGradContent] = useState("");
  const [gradImage, setGradImage] = useState("");

  const { 
    works, addWork, deleteWork, 
    blogPosts, addBlogPost, deleteBlogPost,
    gradProjPosts, addGradProjPost, deleteGradProjPost
  } = usePortfolioStore();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "1111") {
      setIsAuthorized(true);
      setError("");
    } else {
      setError("비밀번호가 틀렸습니다.");
    }
  };

  const handleUpload = () => {
    if (!newTitle || !newImageUrl) {
      alert("제목과 이미지 URL을 입력해주세요.");
      return;
    }
    addWork({
      title: newTitle,
      category: newCategory,
      image: newImageUrl,
    });
    setNewTitle("");
    setNewImageUrl("");
    alert("업로드되었습니다!");
  };

  const handleBlogUpload = () => {
    if (!blogTitle || !blogContent) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    addBlogPost({
      title: blogTitle,
      content: blogContent,
      image: blogImage,
    });
    setBlogTitle("");
    setBlogContent("");
    setBlogImage("");
    alert("블로그 글이 등록되었습니다!");
  };

  const handleGradUpload = () => {
    if (!gradTitle || !gradContent) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    addGradProjPost({
      title: gradTitle,
      content: gradContent,
      image: gradImage,
    });
    setGradTitle("");
    setGradContent("");
    setGradImage("");
    alert("졸업 작품이 등록되었습니다!");
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h1 className="text-2xl font-bold text-[#243397] mb-6 text-center">ADMIN ACCESS</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#243397] focus:border-transparent outline-none transition-all"
                placeholder="Enter password"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#243397] text-white py-2 rounded-lg font-bold hover:bg-[#243397]/90 transition-colors shadow-lg shadow-[#243397]/20"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-[#243397]">ADMIN DASHBOARD</h1>
          <button 
            onClick={() => setIsAuthorized(false)}
            className="text-gray-400 hover:text-red-500 font-medium transition-colors"
          >
            LOGOUT
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-xl font-bold text-[#243397] mb-6">UPLOAD NEW GRADUATION PROJECT</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Project Title</label>
              <input 
                type="text" 
                value={gradTitle}
                onChange={(e) => setGradTitle(e.target.value)}
                placeholder="Project Title" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#243397]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Project Image URL (Optional)</label>
              <input 
                type="text" 
                value={gradImage}
                onChange={(e) => setGradImage(e.target.value)}
                placeholder="https://..." 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#243397]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Content</label>
              <textarea 
                value={gradContent}
                onChange={(e) => setGradContent(e.target.value)}
                rows={6}
                placeholder="Project Content" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#243397] resize-none"
              />
            </div>
            <button 
              onClick={handleGradUpload}
              className="bg-[#243397] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#243397]/90 transition-colors"
            >
              UPLOAD GRADUATION PROJECT
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-xl font-bold text-[#243397] mb-6">UPLOAD NEW BLOG POST</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Blog Title</label>
              <input 
                type="text" 
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
                placeholder="Post Title" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#243397]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Blog Image URL (Optional)</label>
              <input 
                type="text" 
                value={blogImage}
                onChange={(e) => setBlogImage(e.target.value)}
                placeholder="https://..." 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#243397]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Content</label>
              <textarea 
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
                rows={6}
                placeholder="Post Content" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#243397] resize-none"
              />
            </div>
            <button 
              onClick={handleBlogUpload}
              className="bg-[#243397] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#243397]/90 transition-colors"
            >
              UPLOAD BLOG POST
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-xl font-bold text-[#243397] mb-6">UPLOAD NEW CONTENT</h2>
          <div className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">Title</label>
                  <input 
                    type="text" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Project Title" 
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#243397]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase">Category</label>
                  <select 
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#243397]"
                  >
                    <option value="WORK">WORK</option>
                    <option value="BLOG">BLOG</option>
                    <option value="GRAD-PROJ">GRAD-PROJ</option>
                  </select>
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Image URL</label>
                <input 
                  type="text" 
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..." 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#243397]"
                />
             </div>
             <button 
               onClick={handleUpload}
               className="bg-[#243397] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#243397]/90 transition-colors"
             >
               UPLOAD CONTENT
             </button>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-xl font-bold text-[#243397]">MANAGE GRADUATION PROJECTS</h2>
          <div className="grid grid-cols-1 gap-4">
            {gradProjPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {post.image && <img src={post.image} alt="" className="w-16 h-16 object-cover rounded-lg" />}
                  <div>
                    <h3 className="font-bold text-[#243397]">{post.title}</h3>
                    <p className="text-xs text-gray-400 font-bold">{post.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => deleteGradProjPost(post.id)}
                  className="text-red-400 hover:text-red-600 font-bold text-sm"
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-xl font-bold text-[#243397]">MANAGE BLOG POSTS</h2>
          <div className="grid grid-cols-1 gap-4">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {post.image && <img src={post.image} alt="" className="w-16 h-16 object-cover rounded-lg" />}
                  <div>
                    <h3 className="font-bold text-[#243397]">{post.title}</h3>
                    <p className="text-xs text-gray-400 font-bold">{post.date}</p>
                  </div>
                </div>
                <button 
                  onClick={() => deleteBlogPost(post.id)}
                  className="text-red-400 hover:text-red-600 font-bold text-sm"
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#243397]">MANAGE CONTENT</h2>
          <div className="grid grid-cols-1 gap-4">
            {works.map((work) => (
              <div key={work.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={work.image} alt="" className="w-16 h-16 object-cover rounded-lg" />
                  <div>
                    <h3 className="font-bold text-[#243397]">{work.title}</h3>
                    <p className="text-xs text-gray-400 font-bold">{work.category}</p>
                  </div>
                </div>
                <button 
                  onClick={() => deleteWork(work.id)}
                  className="text-red-400 hover:text-red-600 font-bold text-sm"
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

