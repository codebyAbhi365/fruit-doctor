import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-green-800 text-white">
      <Link to="/" className="font-bold">Fruit Doctor</Link>
      <div className="space-x-4">
        <Link to="/apple-visualizer">Apple Visualizer</Link>
      </div>
    </nav>
  );
}
