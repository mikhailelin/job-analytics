export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Dashboard</a></li>
        <li><a href="/compare" className="hover:underline">Vergleich</a></li>
        <li><a href="/about" className="hover:underline">Über</a></li>
      </ul>
    </nav>
  );
}