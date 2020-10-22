import React from "react";
import Button from "../Button/button";
import styles from "./topBar.module.scss";
import { Logo } from "../../icons/index";
import { Link } from "react-router-dom";
const ButtonData = [
  { type: "primary", title: "Özelikler" },
  { type: "primary", title: "Fiyat" },
  { type: "primary", title: "İletişim" },
  { type: "secondary", title: "Uygulamaya Git", to: '/login' },
];

export default function TopBar() {
	return (
		<div className="topBarContainer">
			<div className="topBarContainer__logoContainer">
				<Logo className="topBarContainer__logoContainer__logo" />
			</div>
			<div className="topBarContainer__links">
				{ButtonData.map((item, i) => {
					return <Link key={i} className={"topBarContainer__buttonContainer__menu"} to={item.to}>{item.title}</Link>;
				})}
			</div>
		</div>
	);
}
