import PublicHeader from "../components/home/header/PublicHeader";
import SearchBar from "../components/searchbar/Searchbar";
export default function PublicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Public Nav */}
      <header className="p-4 bg-gray-100">
        <PublicHeader />
        <SearchBar />
      </header>
      <main>{children}</main>
    </div>
  );
}
