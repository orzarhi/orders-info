import { IconButton, TextField } from "@mui/material";
import React from "react";
import { MdDone } from "react-icons/md";
import "./Form.css";

const Form = ({ title, onClick }) => {
	return (
		<>
			<span className="title-edit">{title}</span>
			<div className="inputs-edit-wrapper">
				<TextField label="test" />
				<TextField label="test" />
				<TextField label="test" />
				<TextField label="test" />
				<TextField label="test" />
				<TextField label="test" />
			</div>
			<div className="icon-edit-wrapper">
				<IconButton className="icon-edit" onClick={onClick}>
					<MdDone />
				</IconButton>
			</div>
		</>
	);
};

export default Form;
