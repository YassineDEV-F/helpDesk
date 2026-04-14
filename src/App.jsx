import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Actions
  const handleLogin = () => {
    setIsLoggedIn(true);  // Changes the Navbar icons
    setCurrentPage('home'); // Moves you away from the login screen
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  // If the user clicked the login button, show the Login Page
  if (currentPage === 'login') {
    return <Login onLogin={handleLogin} onCancel={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
        onLoginClick={() => setCurrentPage('login')} 
      />
      
      <main className="flex items-center justify-center pt-24 px-4">
        <div className="bg-white p-16 rounded-2xl shadow-sm border border-gray-100 max-w-2xl w-full text-center">
          <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
            {isLoggedIn ? "Dashboard Active" : "Help is a click away."}
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed">
            {isLoggedIn 
              ? "You are now authorized to manage tickets and services." 
              : "Log in to your account to start managing your support desk."}
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;