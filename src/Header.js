import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <nav className="navbar bg-dark justify-content-center" style={{ backgroundColor: "grey" }}>

            <li className="nav-link ">
                <NavLink to="/Home" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Home Page
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/Dashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Home
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/myprofile" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    My Profile
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/contact" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    contact us
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/login" onClick={() => localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Logout
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/Login" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Login
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/Register" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Register
                </NavLink>
            </li>

        </nav>
    )
}

export default Header