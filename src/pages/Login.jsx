import { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin, onCancel }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setIsLoading(true);

    try {
        const response = await axios.post('http://localhost:8000/api/login', {
        email: email,
        password: password
        });

        // We only proceed if the server gives us a 200 OK
        if (response.status === 200) {
        console.log("Login successful!");
        onLogin(); // This changes the state in App.jsx
        }
    } catch (err) {
        // If we hit this block, the login FAILED. 
        // We must NOT call onLogin() here.
        console.error("Login Error:", err.response?.data);
        setError(err.response?.data?.message || "Invalid credentials. Access denied.");
        
        // Explicitly return to stop any further logic
        return; 
    } finally {
        setIsLoading(false);
    }
    };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 w-full max-w-md">
        <h2 className="text-3xl font-black text-gray-900 mb-6 text-center tracking-tight">Sign In</h2>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@test.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 cursor-pointer shadow-lg transition-all disabled:bg-gray-400"
          >
            {isLoading ? 'Checking...' : 'Sign In'}
          </button>
          
          <button type="button" onClick={onCancel} className="w-full mt-2 text-gray-500 hover:text-black hover:underline cursor-pointer text-sm transition-all">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}