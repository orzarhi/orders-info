import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { GiWeight } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { agentsSum } from "../../data/agentsSum";
import InputSelect from "../../inputs/InputSelect";
import SquareInfo from "../../squareInfo/SquareInfo";

import ChartScatter from "~/components/chart/ChartScatter";
import ChartArea from "~/components/chart/ChartArea";
import ChartColumn from "~/components/chart/ChartColumn";
import ChartLine from "~/components/chart/ChartLine";
import ChartPie from "~/components/chart/ChartPie";
import ChartPolar from "~/components/chart/ChartPolar";
import ChartStacked from "~/components/chart/ChartStacked";

import "./Main.css";
import orders from "~/components/data/orders";
const Main = () => {
	const [customer, setCustomer] = useState("");
	const [agents, setAgents] = useState("");
	const [category, setCategory] = useState("");
	const [time, setTime] = useState("");
	//orders[0].topItemsLeftInStock.map((o) => o.name);

	const ordersData = orders
		.flatMap((o) => o.data.topItemsLeftInStock)
		.map((i) => ({ label: i.name, value: i.id }));

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
					options={ordersData}
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
					sum={"₪486,710"}
					icon={<AiOutlineShoppingCart />}
					style={"#F3CCFF"}
				/>
				<SquareInfo
					content={"כמות"}
					sum={'85,590 ק"ג'}
					icon={<GiWeight />}
					style={"#FFF6BD"}
				/>
				<SquareInfo
					content={"ממוצע לעסקה"}
					sum={"₪25,392"}
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
				<ChartPolar />
				<ChartColumn />
				<ChartStacked />
				<ChartPie />
				<ChartArea />
				<ChartScatter />
			</section>
		</>
	);
};

export default Main;
