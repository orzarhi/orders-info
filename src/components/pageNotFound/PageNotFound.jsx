import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
	const [timer, setTimer] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (timer > 1) setTimer((prev) => prev - 1);
			else navigate("/");
		}, 1000);
		return () => clearTimeout(timeout);
	}, [timer]);

	return (
		<div className="page-not-found">
			<span className="title-not-found">
				Oops... <span style={{ color: "#dc3535e1" }}>404</span> Page
			</span>
			<span className="message">
				You're back home in a {timer} sec 🏡
			</span>
		</div>
	);
};

export default PageNotFound;
