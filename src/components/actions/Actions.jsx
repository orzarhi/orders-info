import React from "react";
import FormEdit from "../formEdit/FormEdit";
import { deleteEmp } from "../services/deleteEmp";
import Modal from "../ui/modalDialog/ModalDialog";
import PopUp from "../ui/popUp/PopUp";

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
					<FormEdit title={"Edit"} onClick={() => alert("test")} />
				</PopUp>
			)}
		</>
	);
};

export default Actions;
