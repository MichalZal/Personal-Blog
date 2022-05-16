import React from "react";
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai'
import './NavLinks.css'

const NavLinks = () => {
	return (
		<>
			<div className="navbarLinks">
				<div className="socialLinks">
					<div className="facebook">
						<a href="https://www.facebook.com/Michalzalewsk" target="_blank">
							<BsFacebook className="face-logo" />
						</a>
					</div>
					<div className="github">
						<a href="https://github.com/MichalZal" target="_blank">
							<BsGithub className="git-logo" />
						</a>
					</div>
					<div className="instagram">
						<a href="https://www.instagram.com/chraabaszcz/" target="_blank">
							<AiFillInstagram className="insta-logo" />
						</a>
					</div>
				</div>
				<ul className="ul">
					<li className="navbarLink">
						{" "}
						<a href="../../App.js"> Strona Główna</a>
					</li>
					<li className="navbarLink">
						{" "}
						<a href="../../Projects.js"> Projekty </a>
					</li>
					<li className="navbarLink">
						{" "}
						<a href="../../About.js"> O mnie </a>
					</li>
					<li className="navbarLink">
						{" "}
						<a href="../../Contact.js"> Kontakt </a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavLinks;
