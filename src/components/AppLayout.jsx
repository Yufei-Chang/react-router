import { Outlet, NavLink } from "react-router-dom";

function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/AboutUs">About Us</NavLink></li>
                    <li><NavLink to="/PostsList">Lista Post</NavLink></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default AppLayout;