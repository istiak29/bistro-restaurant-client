import { NavLink } from "react-router-dom";

const NavBar = () => {

    const navOptions = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>

        <li>
            <NavLink to={'/contactUs'}>Contact Us</NavLink>
        </li>

        <li>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
        </li>

        <li>
            <NavLink to={'/menu'}>Our Menu</NavLink>
        </li>

        <li>
            <NavLink to={'/shop'}>Our Shop</NavLink>
        </li>
    </> 

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-25 bg-slate-700  text-xl text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <h1>Bistro Boss</h1>
                        <h1>Restaurant</h1>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;