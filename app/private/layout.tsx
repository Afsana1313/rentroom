import { redirect } from "next/navigation";

export default function PrivateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = false; // Replace with real auth check

  if (!isLoggedIn) {
    redirect("/login"); // redirect to public login page
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar, or header only for private pages */}
      <aside className="w-60 bg-gray-800 text-white p-4">Sidebar</aside>
      <main className="p-4 flex-1">{children}</main>
    </div>
  );
}
