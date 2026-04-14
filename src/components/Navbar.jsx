export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-100 py-4 px-6 flex items-center gap-3 shadow-[0_4px_20px_rgba(255,107,107,0.08)]">

      <div className="w-9 h-9 bg-linear-to-br from-[#FF6B6B] to-[#FF8E8E] text-white flex items-center justify-center rounded-full font-semibold shadow-md shadow-red-200">
        B
      </div>

      <h1 className="font-semibold text-lg tracking-tight text-gray-900">
        Browsely
      </h1>

    </div>
  );
}
``