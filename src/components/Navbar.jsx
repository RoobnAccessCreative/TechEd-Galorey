import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav flex items-center justify-between w-full h-fit max-h-[10%]">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="logo p-1 rounded-xl object-contain bg-white/30 h-20"
        />
        <h1 className="title">Galorey</h1>
      </div>
    </nav>
  );
}
