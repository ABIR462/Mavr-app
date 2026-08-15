import { getPosts } from "@/actions/blog";
import Link from "next/link";

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const posts = await getPosts();

  // Mock data for registrations since we have no database
  const recentSignups = [
    { email: "rohit.sharma@gmail.com", phone: "+91 98765 43210", date: "Today" },
    { email: "priya.nair@outlook.com", phone: "+91 87654 32109", date: "Today" },
    { email: "vikram.singh@yahoo.com", phone: "+91 76543 21098", date: "Yesterday" },
  ];

  const recentTrainers = [
    { name: "Coach Sandeep", city: "Mumbai", whatsapp: "+91 99999 88888", students: "26–50" },
    { name: "Anjali Mehta", city: "Bangalore", whatsapp: "+91 88888 77777", students: "11–25" },
  ];

  const recentBetaApps = [
    { name: "Devansh Patel", city: "Pune", sport: "Powerlifting", frequency: "5–6 days / week" },
    { name: "Meera Sen", city: "Kolkata", sport: "Athletics", frequency: "Every day" },
  ];

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div>
        <div className="overline mb-1">SYSTEM CONTROLS</div>
        <h1 className="font-display text-4xl text-white">SYSTEM DASHBOARD</h1>
        <p className="text-gray-400 text-sm mt-2 font-light">
          Real-time metrics, active user log, and data configurations for MAVR.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Waitlist Spots Claimed", value: "847", desc: "Targeting 1,000", border: "border-l-[#CC0000]" },
          { label: "Closed Beta Claims", value: "67", desc: "100 Spots Available", border: "border-l-amber-500" },
          { label: "Trainer Signups", value: "42", desc: "Coach Connect Enrolled", border: "border-l-emerald-500" },
          { label: "Published Blogs", value: posts.length.toString(), desc: "Dynamic list items", border: "border-l-blue-500" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`mavr-card p-6 border-l-4 ${stat.border}`}
          >
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
              {stat.label}
            </div>
            <div className="font-display text-3xl text-white">{stat.value}</div>
            <div className="text-[10px] text-gray-400 font-mono mt-2">{stat.desc}</div>
          </div>
        ))}
      </div>

      {/* Submissions Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Waitlist Signups */}
        <div className="mavr-card p-6">
          <h3 className="font-display text-lg text-white mb-4">Waitlist Entries (Mock)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs text-gray-400">
              <thead>
                <tr className="border-b border-[#141414] pb-2 text-[10px] text-gray-500 tracking-wider">
                  <th className="pb-2">EMAIL</th>
                  <th className="pb-2">PHONE</th>
                  <th className="pb-2 text-right">TIMESTAMP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#141414]">
                {recentSignups.map((s) => (
                  <tr key={s.email} className="hover:bg-white/2">
                    <td className="py-3 text-white truncate max-w-[180px]">{s.email}</td>
                    <td className="py-3">{s.phone}</td>
                    <td className="py-3 text-right text-gray-600">{s.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trainer Onboardings */}
        <div className="mavr-card p-6">
          <h3 className="font-display text-lg text-white mb-4">Coach Registrations (Mock)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs text-gray-400">
              <thead>
                <tr className="border-b border-[#141414] pb-2 text-[10px] text-gray-500 tracking-wider">
                  <th className="pb-2">NAME</th>
                  <th className="pb-2">CITY</th>
                  <th className="pb-2">WHATSAPP</th>
                  <th className="pb-2 text-right">STUDENTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#141414]">
                {recentTrainers.map((t) => (
                  <tr key={t.name} className="hover:bg-white/2">
                    <td className="py-3 text-white">{t.name}</td>
                    <td className="py-3">{t.city}</td>
                    <td className="py-3">{t.whatsapp}</td>
                    <td className="py-3 text-right text-gray-600">{t.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Blog Posts */}
      <div className="mavr-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg text-white">Current Blog Articles</h3>
          <Link
            href="/admin/blogs"
            className="text-[#CC0000] hover:text-[#ff4444] text-xs font-mono font-bold tracking-wider"
          >
            + WRITE NEW POST
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs text-gray-400">
            <thead>
              <tr className="border-b border-[#141414] pb-2 text-[10px] text-gray-500 tracking-wider">
                <th className="pb-2">ARTICLE TITLE</th>
                <th className="pb-2">SLUG</th>
                <th className="pb-2 text-right">DATE PUBLISHED</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#141414]">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-white/2">
                  <td className="py-3 text-white font-body-barlow text-sm font-semibold">
                    <Link href={`/blog/${post.slug}`} target="_blank" className="hover:text-[#CC0000] transition-colors">
                      {post.title}
                    </Link>
                  </td>
                  <td className="py-3">/{post.slug}</td>
                  <td className="py-3 text-right text-gray-600">
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
