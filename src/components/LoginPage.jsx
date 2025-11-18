import { useState } from 'react'

function LoginPage() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { login, password, rememberMe })
    // Add your login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1d29] px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Card Container */}
        <div className="bg-[#3a3d4a] rounded-lg shadow-xl p-8 border-t-4 border-[#00d4aa]">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">
              Sign In to your Account
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Login Input */}
            <div>
              <label
                htmlFor="login"
                className="block text-sm font-normal text-white mb-2"
              >
                Login
              </label>
              <input
                id="login"
                name="login"
                type="text"
                required
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="block w-full px-4 py-3 bg-[#4a4d5a] border border-[#5a5d6a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:border-transparent transition duration-200 text-white placeholder-gray-400"
                placeholder="Email or phone number"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-normal text-white mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 bg-[#4a4d5a] border border-[#5a5d6a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00d4aa] focus:border-transparent transition duration-200 text-white placeholder-gray-400"
                placeholder="Enter password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-[#00d4aa] focus:ring-[#00d4aa] border-gray-500 rounded cursor-pointer bg-[#4a4d5a]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-white cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-normal text-[#00d4aa] hover:text-[#00e5bb] transition duration-200"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-full text-white bg-[#b8b8b8] hover:bg-[#c8c8c8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00d4aa] transition duration-200"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
