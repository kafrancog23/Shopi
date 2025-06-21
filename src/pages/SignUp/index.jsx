import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Layout from '../../components/layout'
import { ShopContext } from '../../Context'

function SignUp() {
    const context = useContext(ShopContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            setError('Please fill in all fields')
            return
        }
        const result = context.handleSignUp(name, email, password)
        if (!result.success) {
            setError(result.error)
            return
        }
    }

    if (context.account?.email) {
        return <Navigate to="/" />
    }

    return (
        <Layout>
            <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
                <div className="rounded-lg bg-white formLogin">
                    <div>
                        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                            Create your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="rounded-md bg-red-50 p-4 text-red-600">
                                {error}
                            </div>
                        )}
                        <div className="space-y-4 rounded-md">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="p-2 relative block w-full rounded-[12px] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="p-2 relative block w-full rounded-[12px] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="p-2 relative block w-full rounded-[12px] border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full h-[56px] bg-black text-white text-base rounded-[12px] font-medium hover:bg-gray-800 transition-colors"
                            >
                                Create Account
                            </button>
                        </div>

                        <div className="text-center text-sm">
                            <span className="text-gray-500">Already have an account? </span>
                            <Link
                                to="/sign-in"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default SignUp
