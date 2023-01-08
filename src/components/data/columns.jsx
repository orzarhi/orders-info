export const columns = [
	{
		field: "avatar",
		headerName: "Avatar",
		width: 100,
		renderCell: (params) => {
			return (
				<img
					className="avatar"
					src={params.row.avatar}
					alt={`image - ${params.row.name}`}
				/>
			);
		},
	},
	{ field: "id", headerName: "ID", width: 100 },
	{ field: "name", headerName: "Full Name", width: 150 },
	{ field: "date_birth", headerName: "Date Birth", width: 140 },
	{ field: "salary", headerName: "Salary", width: 130 },
	{ field: "at_work", headerName: "At Work", width: 130 },
];
