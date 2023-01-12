import { IconButton, TextField } from "@mui/material";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import "./FormEdit.css";

const FormEdit = ({ title, onClick }) => {
	const editRow = () => {
		console.log("Test Edit");
	};
	return (
		<>
			<span className="title-edit">{title}</span>
			<div className="inputs-edit-wrapper">
				<TextField placeholder="test" />
				<TextField placeholder="test2" />
				<TextField placeholder="test3" />
				<TextField placeholder="test4" />
				<TextField placeholder="test5" />
				<TextField placeholder="test6" />
			</div>
			<div className="icon-edit-wrapper">
				<IconButton className="icon-edit" onClick={onClick}>
					<MdOutlineModeEdit />
				</IconButton>
			</div>
		</>
	);
};

export default FormEdit;
