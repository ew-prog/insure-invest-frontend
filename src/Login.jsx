import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // 🔐 Simple static login — later, connect to backend authentication
    if (email === 'partner@insureinvest.com' && password === 'password123') {
      localStorage.setItem('token', 'dummy-auth-token')
      alert('Login successful!')
      navigate('/dashboard') // redirect to dashboard
    } else {
      alert('Invalid credentials. Try again.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Partner Login
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border rounded focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 border rounded focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
