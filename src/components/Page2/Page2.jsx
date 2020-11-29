import React, { useEffect, useState } from "react";
import "./Page2.css";
import AttachmentSVG from "../../assets/page2/Attachment.svg";
import DownArrowSVG from "../../assets/page2/DownArrow.svg";
import IMGSVG from "../../assets/page2/Img.svg";
function Page2() {
	const [message, setMessage] = useState("");
	const [posts, setPost] = useState([]);
	const AddMessage = () => {
		let Post = [...posts];
		console.log(message);
		if (message.length > 0) {
			Post.unshift({
				title: "Admin",
				message: message,
				time: "12.30AM",
			});
		}
		setPost(Post);
	};
	useEffect(() => {
		setPost([
			{
				title: "Admin",
				message:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
				time: "12.30AM",
			},
			{
				title: "Student",
				message:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				time: "12.30AM",
			},
			{
				title: "Teacher",
				message: "Your faculty uploaded the syllabus.",
				time: "12.30AM",
			},
		]);
	}, []);

	return (
		<div className="page2">
			<div className="post_container">
				<textarea
					onChange={(e) => setMessage(e.target.value)}
					type="text"
					placeholder="Share something with your class.."
				/>
				<div className="post_container_body">
					<p>Cancel</p>
					<div className="post_container_body_attach">
						<img src={AttachmentSVG} alt="" />
					</div>
					<div onClick={() => AddMessage()} className="post_container_post">
						<p>Share</p>
						<div>
							<img src={DownArrowSVG} alt="" />
						</div>
					</div>
				</div>
			</div>
			{posts.slice(0, 4).map((post) => {
				return (
					<div className="page2_posts">
						<img src={IMGSVG} alt="" className="A"></img>
						<div className="B">
							<div>
								<h4>{post.title}</h4>
								<p>{post.time}</p>
							</div>
							<p className="post_msg">{post.message}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Page2;
