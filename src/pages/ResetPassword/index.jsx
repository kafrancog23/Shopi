import { useContext, useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import Layout from '../../components/layout'
import { ShopContext } from '../../Context'

function ResetPassword() {
    const context = useContext(ShopContext)
    const location = useLocation()
    const email = new URLSearchParams(location.search).get('email')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    if (!email) {
        return <Navigate to="/forgot-password" />
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!password || !confirmPassword) {
            setError('Please fill in all fields')
            return
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return
        }

        const result = context.handleResetPassword(email, password)
        if (!result.success) {
            setError(result.error)
            return
        }
        setSuccess(true)
    }

    return (
        <Layout>
            <div className="flex items-center justify-center w-full">
                <form 
                    className="flex flex-col gap-4 w-80 p-4" 
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-xl font-medium text-center mb-2">
                        Reset Password
                    </h1>
                    
                    {error && (
                        <div className="text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}

                    {success ? (
                        <div className="text-center">
                            <div className="text-green-500 text-sm mb-4">
                                Password reset successfully!
                            </div>
                            <Link 
                                to="/sign-in"
                                className="text-sm underline underline-offset-4"
                            >
                                Back to Sign In
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="password">New Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="border border-black rounded-lg h-10 px-4"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="At least 6 characters"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="confirm-password">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="border border-black rounded-lg h-10 px-4"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="bg-black text-white w-full rounded-lg h-14 text-base"
                            >
                                Change Password
                            </button>
                        </>
                    )}
                </form>
            </div>
        </Layout>
    )
}

export default ResetPassword
