export default function Navbar({ isLoggedIn, onLogout, onLoginClick }) {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          /* The Menu Icon appears only when logged in */
          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 cursor-pointer transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        ) : (
          /* The Emoji appears when logged out */
          <span className="text-3xl select-none">👨‍🔧</span>
        )}
        <span className="text-2xl font-bold text-gray-900 tracking-tight">HelpDesk</span>
      </div>

      <div>
        {isLoggedIn ? (
          <button onClick={onLogout} className="bg-red-50 text-red-600 px-5 py-2 rounded-md font-bold hover:bg-red-100 transition-all text-sm border border-red-100 cursor-pointer">
            Log off
          </button>
        ) : (
          <button onClick={onLoginClick} className="bg-black text-white px-6 py-2 rounded-md font-bold hover:bg-gray-800 transition-all text-sm shadow-sm cursor-pointer">
            Log in
          </button>
        )}
      </div>
    </nav>
  );
}