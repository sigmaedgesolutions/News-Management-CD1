export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <ul className="flex space-x-6 px-4 py-2">
        <li><a href="/" className="hover:underline">తాజా వార్తలు</a></li>
        <li><a href="/andhra" className="hover:underline">ఆంధ్రప్రదేశ్</a></li>
        <li><a href="/telangana" className="hover:underline">తెలంగాణ</a></li>
        <li><a href="/national" className="hover:underline">జాతీయ</a></li>
        <li><a href="/international" className="hover:underline">అంతర్జాతీయ</a></li>
        <li><a href="/business" className="hover:underline">బిజినెస్</a></li>
        <li><a href="/sports" className="hover:underline">క్రీడలు</a></li>
        <li><a href="/cinema" className="hover:underline">సినిమా</a></li>
        <li><a href="/weekend" className="hover:underline">ఫీచర్ వీకెండ్</a></li>
      </ul>
    </nav>
  );
}
