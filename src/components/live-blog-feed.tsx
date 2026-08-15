"use client";
 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
 
export default function LiveBlogFeed() {
  const [newBlogNotification, setNewBlogNotification] = useState(false);
  const router = useRouter();
 
  useEffect(() => {
    // Show a mock notification after 15 seconds for demonstration purposes,
    // simulating a real-time event without any database dependencies
    const timer = setTimeout(() => {
      setNewBlogNotification(true);
    }, 15000);
 
    return () => clearTimeout(timer);
  }, []);
 
  if (!newBlogNotification) return null;
 
  return (
    <div className="fixed bottom-6 right-6 bg-[#cc0000] text-white p-4 rounded-lg shadow-lg z-50 flex items-center gap-4 animate-fade-in border border-[#ff4444] max-w-sm">
      <div>
        <p className="font-bold text-[14px]">New article published!</p>
        <p className="text-xs opacity-90 mt-0.5">Learn what is loading in the MAVR Athlete OS.</p>
      </div>
      <button 
        onClick={() => {
          setNewBlogNotification(false);
          router.refresh();
        }}
        className="bg-white text-[#cc0000] px-3 py-1.5 rounded font-bold text-xs hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
      >
        Refresh
      </button>
    </div>
  );
}
