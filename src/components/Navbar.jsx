import { NavLink } from "react-router-dom"

const getNavStyle = ({ isActive }) => ({
    color: 'black',
    borderRadius: '30px',
    textDecoration: 'none',
    display: 'block',
    padding: '10px',
    marginTop: '10px',
    backgroundColor: isActive ? 'rgba(125, 125, 125, 0.3)' : ''
})

export const Navbar = () => {
    return (
        <>
            <NavLink style={getNavStyle} to='/'>All Habits</NavLink>
            <NavLink style={getNavStyle} to='/archives'>All Archives Habits</NavLink>
        </>
    )
}