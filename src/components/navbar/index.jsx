import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from '../contextx';
import { ShopContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';

const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const authContext = useContext(ShopContext)
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white shadow-md'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                    to='/'
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    } >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => context.setSelectedCategory(null)}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => context.setSelectedCategory('Clothes')}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => context.setSelectedCategory('Electronics')}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furniture'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => context.setSelectedCategory('Furniture')}>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => context.setSelectedCategory('Toys')}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined
                    }
                    onClick={() => context.setSelectedCategory('Others')}>
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* derecha */}
            <ul className='flex items-center gap-3'>
                {authContext.account?.email ? (
                    <>
                        <li className='text-black/60'>
                            {authContext.account.name || authContext.account.email}
                        </li>
                        <li>
                            <NavLink
                                to='/my-orders'
                                className={({isActive}) =>
                                    isActive ? activeStyle : undefined
                                }>
                                My Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/my-account'
                                className={({isActive}) =>
                                    isActive ? activeStyle : undefined
                                }>
                                My Account
                            </NavLink>
                        </li>
                        <li>
                            <button
                                onClick={authContext.handleSignOut}
                                className='text-black hover:underline hover:underline-offset-4'>
                                Sign Out
                            </button>
                        </li>
                        <li>
                            <NavLink
                                to='/cart'
                                className={({isActive}) =>
                                    isActive ? activeStyle : undefined
                                }>
                                <div className="flex items-center gap-1">
                                    <ShoppingCartIcon className='h-6 w-6 text-black' />
                                    <span style={{ color: 'black' }}>{context.cart.length}</span>
                                </div>
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink
                                to='/sign-in'
                                className={({isActive}) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Sign In
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/sign-up'
                                className={({isActive}) =>
                                    isActive ? activeStyle : undefined
                                }>
                                Sign Up
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar; 