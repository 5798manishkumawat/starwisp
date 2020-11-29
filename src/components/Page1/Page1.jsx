import React from "react";
import "./Page1.css";
import SearchSVG from "../../assets/sidebar/Search.svg";
import Graph1SVG from "../../assets/page1/Graph1.jpg";
import Graph2SVG from "../../assets/page1/Graph2.jpg";
import Graph3SVG from "../../assets/page1/Graph3.jpg";
import Graph4SVG from "../../assets/page1/Graph4.jpg";
function Page1() {
	const Right_items = [
		{
			title: "Admin",
			message: "Your faculty uploaded the syllabus.",
			time: "3 minutes ago",
		},
		{
			title: "Student",
			message: "Your faculty uploaded the syllabus.",
			time: "3 minutes ago",
		},
		{
			title: "Teacher",
			message: "Your faculty uploaded the syllabus.",
			time: "3 minutes ago",
		},
		{
			title: "Admin",
			message: "Your faculty uploaded the syllabus.",
			time: "3 minutes ago",
		},
		{
			title: "Student",
			message: "Your faculty uploaded the syllabus.",
			time: "3 minutes ago",
		},
		{
			title: "Teacher",
			message: "Your faculty uploaded the syllabus.",
			time: "3 minutes ago",
		},
		{
			title: "Student",
			message: "Your faculty uploaded the syllabus.",
			time: "3 minutes ago",
		},
		{
			title: "Teacher",
			message: "Your faculty uploaded the syllabus.",
			time: "3 minutes ago",
		},
	];

	return (
		<div className="page1">
			<div className="search_bar">
				<img src={SearchSVG} alt="" />
				<input type="text" placeholder="Search" />
			</div>
			<div className="page1_body">
				<div className="page1_body_left">
					<div className="page1_left_container1">
						<div className="page1_left_subcontainer11">
							<p>
								Sales Report <strong> Sepetember 12</strong>
							</p>

							<img src={Graph1SVG} alt="" />
						</div>
						<div className="page1_left_subcontainer12">
							<span>17 Sep</span>
							<div className="A">
								<p>$1,204.33</p>
								<p>Revenue</p>
							</div>
							<div className="B">
								<p>33</p>
								<p>Quotations</p>
							</div>
						</div>
					</div>
					<div className="page1_left_container2">
						<div className="A">
							<h2>Notepad</h2>
						</div>
						<div className="B">
							<img src={Graph2SVG} alt="" />
							<div>
								<p>Inbox</p>
								<h2>23</h2>
							</div>
						</div>
						<div className="C">
							<div>
								<p>This month</p>
								<div>
									<p>+78.2%</p>
									<img src={Graph3SVG} alt="" />
								</div>
							</div>
							<div>
								<p>Last month</p>
								<div>
									<p>+67.4%</p>
									<img src={Graph4SVG} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="page1_body_right">
					<div className="page1_body_right_head">
						<p>Notifications</p>
						<p>Events</p>
					</div>
					<div className="page1_body_right_body">
						<div className="page1_body_right_container">
							{Right_items.slice(0,6).map((item) => {
								return (
									<div className="page1_body_right_items">
										<div className="A"></div>
										<div className="B">
											<h4>{item.title}</h4>
											<h5>{item.message}</h5>
											<h6>{item.time}</h6>
										</div>
									</div>
								);
							})}

							<div className="page1_body_right_showall">
								<button>Show All</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page1;
