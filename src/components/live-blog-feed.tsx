"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

// Initialize Supabase Client (requires environment variables)
// NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export default function LiveBlogFeed() {
  const [newBlogNotification, setNewBlogNotification] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!supabase) return;

    // Listen to inserts on the "Post" table (Make sure Realtime is enabled for this table in Supabase)
    const channel = supabase
      .channel("public:Post")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Post" },
        (payload) => {
          console.log("New blog post detected!", payload);
          // When a new post is inserted, show notification
          setNewBlogNotification(true);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (!newBlogNotification) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-[#cc0000] text-white p-4 rounded-lg shadow-lg z-50 flex items-center gap-4 animate-fade-in border border-[#ff4444]">
      <div>
        <p className="font-bold">A new blog was just published!</p>
        <p className="text-sm opacity-90">Refresh to see the latest content.</p>
      </div>
      <button 
        onClick={() => {
          setNewBlogNotification(false);
          router.refresh();
        }}
        className="bg-white text-[#cc0000] px-3 py-1.5 rounded font-bold text-sm hover:bg-gray-100 transition-colors"
      >
        Refresh
      </button>
    </div>
  );
}
