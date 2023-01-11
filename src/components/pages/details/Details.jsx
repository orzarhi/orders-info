import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { GiWeight } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { agentsSum } from "~/components/data/agentsSum";
import InputSelect from "~/components/inputs/InputSelect";
import SquareInfo from "~/components/squareInfo/SquareInfo";
import {
	ChartScatter,
	ChartArea,
	ChartColumn,
	ChartLine,
	ChartPie,
	ChartPolar,
	ChartStacked,
} from "~/components/chart/index";
import "./Details.css";
import orders from "~/components/data/orders";
import { ordersData } from "~/components/inputs/config";

const Details = () => {
	const [customer, setCustomer] = useState("");
	const [agents, setAgents] = useState("");
	const [category, setCategory] = useState("");
	const [time, setTime] = useState("");

	return (
		<>
			<section className="inputs-selects-wrapper">
				<InputSelect
					title={"תקופה"}
					options={agentsSum}
					value={time}
					setValue={setTime}
				/>
				<InputSelect
					title={"קטגוריה"}
					options={ordersData(orders)}
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
					options={agentsSum}
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
				<ChartLine />
				<ChartPolar agents={agents} />
				<ChartColumn />
				<ChartStacked />
				<ChartPie />
				<ChartArea />
				<ChartScatter />
			</section>
		</>
	);
};

export default Details;