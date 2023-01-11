import { Button } from "@mui/material";
import "./Modal.css";

const Modal = (props) => {
	return (
		<div className="modal" onClick={() => props.setOpenModal(false)}>
			<div className="modal-container">
				<div
					className="modal-close"
					onClick={() => {
						props.setOpenModal(false);
					}}
				>
					&times;
				</div>
				<div className="modal-title">
					<span className="modal-info">{props.title}</span>
				</div>
				<div className="modal-footer">
					<Button
						color="primary"
						className="btn-modal"
						onClick={() => props.setOpenModal(false)}
					>
						No
					</Button>
					<Button
						color="error"
						className="btn-modal"
						onClick={() => {
							props.onClick();
							props.setOpenModal(false);
						}}
					>
						Yes
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
