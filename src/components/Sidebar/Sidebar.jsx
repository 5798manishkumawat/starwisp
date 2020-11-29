import React from "react";
import "./Sidebar.css";

import DashboardSVG from "../../assets/sidebar/item1.svg";
import LoremSVG from "../../assets/sidebar/Lorem.svg";
import IpsumSVG from "../../assets/sidebar/Ipsum.svg";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_options">
				<img src={DashboardSVG} alt="" />
				<span>Dashboard</span>
			</div>
			<div className="sidebar_options">
				<img src={LoremSVG} alt="" />
				<span>Lorem</span>
			</div>
			<div className="sidebar_options">
				<img src={IpsumSVG} alt="" />
				<span>Ipsum</span>
			</div>
		</div>
	);
}

export default Sidebar;
