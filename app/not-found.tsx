import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#CC0000] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-2">Page Not Found</h2>
        <p className="text-[#888] mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-red">
            Go Home
          </Link>
          <Link href="/blog" className="btn-outline">
            Read Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
