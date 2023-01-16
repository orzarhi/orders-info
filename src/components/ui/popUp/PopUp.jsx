import React from "react";
import "./PopUp.css";

const PopUp = ({ children, setOpenPopUp, setOpenAction }) => {
	return (
		<div className="modal">
			<div className="modal-container">
				<div
					className="modal-close"
					onClick={() => {
						setOpenPopUp(false);
						setOpenAction(false);
					}}
				>
					&times;
				</div>
				{children}
			</div>
		</div>
	);
};

export default PopUp;
