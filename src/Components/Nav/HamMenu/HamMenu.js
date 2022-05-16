import React from "react";
import "./HamMenu.css";

const HamMenu = (props) => {
	return (
		<div className="hamMenu" onClick={props.onToggleHamMenu}>
			<span className="bar" id="bar1"></span>
			<span className="bar" id="bar2"></span>
			<span className="bar" id="bar3"></span>
		</div>
	);
};

export default HamMenu;
