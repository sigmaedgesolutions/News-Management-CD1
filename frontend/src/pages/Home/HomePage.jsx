import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to News Management</h1>
        <p className="mt-2 text-gray-700">Latest headlines will appear here...</p>
      </main>
    </div>
  );
}
