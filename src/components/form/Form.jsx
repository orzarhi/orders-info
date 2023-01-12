import { IconButton, TextField } from "@mui/material";
import React from "react";
import { MdDone } from "react-icons/md";
import "./Form.css";

const Form = ({ title, onClick }) => {
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
					<MdDone />
				</IconButton>
			</div>
		</>
	);
};

export default Form;
