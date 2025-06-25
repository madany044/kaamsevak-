export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 text-center text-sm text-gray-500 shadow-inner">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} KaamSevak. All rights reserved.</p>
        <p className="mt-1">Connecting local employers and daily-wage workers.</p>
      </div>
    </footer>
  );
}
