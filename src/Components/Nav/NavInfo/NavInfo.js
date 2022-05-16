import React from "react";
import './NavInfo.css'

const NavInfo = () => {
	return (
		<div className="info">
			<p className="about">
				{" "}
				<span className="link">
					Hello. My name is Michał Zalewski. I really like front-end
					development, but I can also do back-end. My favourite technologies are{" "}
					<span>React</span> and <span>NodeJS</span>
				</span>
			</p>
		</div>
	);
};

export default NavInfo;
