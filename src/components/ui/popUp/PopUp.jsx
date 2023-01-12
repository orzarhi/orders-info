import React from "react";
import "./PopUp.css";

const PopUp = ({ children, setOpenPopUpEdit }) => {
	return (
		<div className="modal">
			<div className="modal-container">
				<div
					className="modal-close"
					onClick={() => setOpenPopUpEdit(false)}
				>
					&times;
				</div>
				{children}
			</div>
		</div>
	);
};

export default PopUp;
