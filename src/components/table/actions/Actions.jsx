import React from "react";
import Form from "../../form/Form";
import { deleteEmp } from "../../services/deleteEmp";
import Modal from "../../ui/modalDialog/ModalDialog";
import PopUp from "../../ui/popUp/PopUp";

const Actions = ({
	openModal,
	setOpenModal,
	employeeId,
	setData,
	openPopUpEdit,
	setOpenPopUpEdit,
}) => {
	return (
		<>
			{openModal && (
				<Modal
					setOpenModal={setOpenModal}
					onClick={() => deleteEmp(employeeId, setData)}
					title={"Are you sure?"}
					textButton={"Delete"}
				/>
			)}
			{openPopUpEdit && (
				<PopUp setOpenPopUpEdit={setOpenPopUpEdit}>
					<Form title={"Edit"} onClick={() => alert("test")} />
				</PopUp>
			)}
		</>
	);
};

export default Actions;
