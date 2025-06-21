import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Layout from '../../components/layout'
import { ShopContext } from '../../Context'

function ForgotPassword() {
    const context = useContext(ShopContext)
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [redirectTo, setRedirectTo] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email) {
            setError('Please enter your email')
            return
        }
        const result = context.handleForgotPassword(email)
        if (!result.success) {
            setError(result.error)
            return
        }
        setRedirectTo(`/reset-password?email=${encodeURIComponent(email)}`)
    }

    if (redirectTo) {
        return <Navigate to={redirectTo} />
    }

    if (context.account?.email) {
        return <Navigate to="/" />
    }

    return (
        <Layout>
            <div className="flex items-center justify-center w-full">
                <form 
                    className="flex flex-col gap-4 w-80 p-4" 
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-xl font-medium text-center mb-2">
                        Forgot Password
                    </h1>
                    
                    {error && (
                        <div className="text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}

                    {success ? (
                        <div className="text-green-500 text-sm text-center">
                            If an account exists with that email, you will receive password reset instructions.
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border border-black rounded-lg h-10 px-4"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="bg-black text-white w-full rounded-lg h-14 text-base"
                            >
                                Reset Password
                            </button>

                            <div className="flex justify-center gap-2 text-sm">
                                <span>Remember your password?</span>
                                <Link 
                                    to="/sign-in"
                                    className="underline underline-offset-4"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </Layout>
    )
}

export default ForgotPassword
