export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b bg-white">
      {/* Logo */}
    {/* Logo */}
<div className="flex items-center">
  <h3 className="text-2xl font-extrabold tracking-wide text-blue-700">
    Todays News
  </h3>
</div>


      {/* Ad Banner */}
      <div className="w-[300px] h-[60px] bg-gray-200 flex items-center justify-center">
        <span className="text-sm text-gray-600">Ad Banner</span>
      </div>
    </header>
  );
}
