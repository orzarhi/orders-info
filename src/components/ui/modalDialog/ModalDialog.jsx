import { Button } from "@mui/material";
import "./ModalDialog.css";

const Modal = ({ title, setOpenModal, onClick, setOpenAction }) => {
	return (
		<div
			className="modal"
			onClick={() => {
				setOpenModal(false);
				setOpenAction(false);
			}}
		>
			<div className="modal-container">
				<div
					className="modal-close"
					onClick={() => setOpenModal(false)}
				>
					&times;
				</div>
				<div className="modal-title">
					<span className="modal-info">{title}</span>
				</div>
				<div className="modal-footer">
					<Button
						color="primary"
						className="btn-modal"
						onClick={() => setOpenModal(false)}
					>
						No
					</Button>
					<Button
						color="error"
						className="btn-modal"
						onClick={() => {
							onClick();
							setOpenModal(false);
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
