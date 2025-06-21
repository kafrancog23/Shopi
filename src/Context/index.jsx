import { createContext, useState, useEffect } from 'react'

export const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
    const [account, setAccount] = useState(() => {
        const savedAccount = localStorage.getItem('currentAccount')
        return savedAccount ? JSON.parse(savedAccount) : {}
    })
    const [signOut, setSignOut] = useState(false)

    useEffect(() => {
        if (Object.keys(account).length > 0) {
            localStorage.setItem('currentAccount', JSON.stringify(account))
        } else {
            localStorage.removeItem('currentAccount')
        }
    }, [account])

    const handleSignIn = (email, password) => {
        const accounts = JSON.parse(localStorage.getItem('accounts') || '{}')
        const storedAccount = accounts[email]

        if (storedAccount && storedAccount.password === password) {
            const { name, email } = storedAccount
            setAccount({ name, email })
            setSignOut(false)
            return { success: true }
        }
        return { success: false, error: 'Invalid email or password' }
    }

    const handleSignUp = (name, email, password) => {
        const accounts = JSON.parse(localStorage.getItem('accounts') || '{}')
        
        if (accounts[email]) {
            return { success: false, error: 'Email already exists' }
        }

        // Store account with credentials
        accounts[email] = { name, email, password }
        localStorage.setItem('accounts', JSON.stringify(accounts))

        // Set current session
        setAccount({ name, email })
        setSignOut(false)
        return { success: true }
    }

    const handleSignOut = () => {
        setAccount({})
        setSignOut(true)
        localStorage.removeItem('currentAccount')
    }

    const handleForgotPassword = (email) => {
        const accounts = JSON.parse(localStorage.getItem('accounts') || '{}')
        const account = accounts[email]

        if (!account) {
            return { success: true }
        }
        return { success: true }
    }

    const handleResetPassword = (email, newPassword) => {
        const accounts = JSON.parse(localStorage.getItem('accounts') || '{}')
        const account = accounts[email]

        if (!account) {
            return { success: false, error: 'Invalid reset link' }
        }
        account.password = newPassword
        accounts[email] = account
        localStorage.setItem('accounts', JSON.stringify(accounts))

        return { success: true }
    }

    return (
        <ShopContext.Provider value={{
            account,
            signOut,
            handleSignIn,
            handleSignUp,
            handleSignOut,
            handleForgotPassword,
            handleResetPassword
        }}>
            {children}
        </ShopContext.Provider>
    )
}
