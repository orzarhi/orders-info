import React from "react";
import Form from "../../form/Form";
import { deleteEmp } from "../../services/deleteEmp";
import Modal from "~/components/ui/modalDialog/ModalDialog";
import PopUp from "~/components/ui/popUp/PopUp";

const Actions = ({
	openModal,
	setOpenModal,
	employeeId,
	setData,
	openPopUpEdit,
	setOpenPopUpEdit,
	setOpenAction,
}) => {
	return (
		<>
			{openModal && (
				<Modal
					setOpenModal={setOpenModal}
					onClick={() => deleteEmp(employeeId, setData)}
					title={"Are you sure?"}
					textButton={"Delete"}
					setOpenAction={setOpenAction}
				/>
			)}
			{openPopUpEdit && (
				<PopUp
					setOpenPopUp={setOpenPopUpEdit}
					setOpenAction={setOpenAction}
				>
					<Form
						title={"Edit"}
						onClick={() => alert("id: " + employeeId)}
					/>
				</PopUp>
			)}
		</>
	);
};

export default Actions;
