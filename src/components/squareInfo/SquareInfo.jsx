import React from "react";
import "./SquareInfo.css";
const SquareInfo = ({ content, sum, icon, style }) => {
	return (
		<div className="square-info" style={{ backgroundColor: style }}>
			<span className="square-info-icon">{icon}</span>
			<span className="square-info-sum">{sum}</span>
			<span className="square-info-content">{content}</span>
		</div>
	);
};

export default SquareInfo;
