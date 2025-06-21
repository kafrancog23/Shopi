import Navbar from '../Navbar'

const Layout = ({children}) => {
    return(
        <>
            <Navbar />
            <div className='flex flex-col mt-20 items-center'>
                {children}
            </div>
        </>
    )
}

export default Layout;