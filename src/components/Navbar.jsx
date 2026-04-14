export default function Navbar() {
  return (
    <div className="bg-white shadow-lg sticky top-0 z-50 py-4 px-6 flex items-center gap-2 backdrop-blur-md ">
      {/* logo */}
      <div className="w-8 h-8 bg-red-400 text-white flex items-center justify-center rounded-full">
        B
      </div>
      {/* brand name */}
      <h1 className="font-semibold text-lg">Browsely</h1>
    </div>
  );
}