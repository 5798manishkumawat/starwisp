import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import DashboardSVG from "../../assets/sidebar/item1.svg";
import LoremSVG from "../../assets/sidebar/Lorem.svg";
import IpsumSVG from "../../assets/sidebar/Ipsum.svg";

function Sidebar() {
	return (
		<div className="sidebar">
			<Link to="/" className="sidebar_options">
				<img src={DashboardSVG} alt="" />
				<span>Dashboard</span>
			</Link>
			<Link to="/page2" className="sidebar_options">
				<img src={LoremSVG} alt="" />
				<span>Page2</span>
			</Link>
			<div className="sidebar_options">
				<img src={IpsumSVG} alt="" />
				<span>Ipsum</span>
			</div>
		</div>
	);
}

export default Sidebar;
