import { Outlet } from "react-router-dom";

const NavBar = () => {
	return (
		<>
           <nav>
             <img src="" alt="" />
             <input type="search" />
             {/* <button>menu</button> */}
           </nav>
			<Outlet />
		</>
	);
};

export default NavBar;