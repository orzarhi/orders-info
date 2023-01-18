import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { GiWeight } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
	ChartArea,
	ChartColumn,
	ChartLine,
	ChartPie,
	ChartPolar,
	ChartScatter,
	ChartStacked,
} from "~/components/chart/index";
import { agentsSum } from "~/components/data/agentsSum";
import ordersNew from "~/components/data/ordersNew";
import InputSelect from "~/components/inputs/InputSelect";
import SquareInfo from "~/components/squareInfo/SquareInfo";
import mockDate from "~/mockDate";
import "./Details.css";

const Details = () => {
	const [customer, setCustomer] = useState("");
	const [agents, setAgents] = useState("");
	const [category, setCategory] = useState("");
	const [time, setTime] = useState("");

	// Not Duplicates
	const names = [...new Set(ordersNew.map((o) => o.CDES))];

	return (
		<>
			<section className="inputs-selects-wrapper">
				<InputSelect
					title={"תקופה"}
					options={mockDate}
					value={time}
					setValue={setTime}
				/>
				<InputSelect
					title={"קטגוריה"}
					options={names}
					value={category}
					setValue={setCategory}
				/>
				<InputSelect
					title={"סוכן"}
					options={agentsSum}
					value={agents}
					setValue={setAgents}
				/>
				<InputSelect
					title={"לקוח"}
					options={names}
					value={customer}
					setValue={setCustomer}
				/>
			</section>
			<section className="squares-info-wrapper">
				<SquareInfo
					content={"סך מכירות"}
					sum={"₪ 486,710"}
					icon={<AiOutlineShoppingCart />}
					style={"#F3CCFF"}
				/>
				<SquareInfo
					content={"כמות"}
					sum={'ק"ג 85,590'}
					icon={<GiWeight />}
					style={"#FFF6BD"}
				/>
				<SquareInfo
					content={"ממוצע לעסקה"}
					sum={"₪ 25,392"}
					icon={<BiCoinStack />}
					style={"#91D8E4"}
				/>
				<SquareInfo
					content={"מספר עסקאות"}
					sum={"316"}
					icon={<HiOutlineDocumentText />}
					style={"#00ff6e3a"}
				/>
			</section>
			<section className="charts-wrapper">
				<ChartLine customer={customer} />
				<ChartPolar agents={agents} />
				<ChartColumn customer={customer} />
				<ChartStacked customer={customer} />
				<ChartPie customer={customer} />
				<ChartArea />
				<ChartScatter />
			</section>
		</>
	);
};

export default Details;
