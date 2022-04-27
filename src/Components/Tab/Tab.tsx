import { useState } from "react";
import {
	TabForm,
	Item,
	Radio,
	TabLabel
} from "./Style";
import { Area, Title, Detail } from "../../Style/Styles";

export default function Tab() {
	const [tabInfo, setTabInfo] = useState([
		{ index: 0, name: "감자", checked: true },
		{ index: 1, name: "고구마", checked: false },
		{ index: 2, name: "카레라이스", checked: false }
	]);
	const [barPos, setBarPos] = useState<number>(0);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const idx = parseInt(event.currentTarget.value);
		setTabInfo(tabInfo.map((v, i) => {
			if (i === idx)
				return { ...v, checked: true };
			return { ...v, checked: false };
		}));
		setBarPos(idx);
	};
	return (
		<Area>
			<Title>Tab</Title>
			<TabForm method="getea">
				{tabInfo.map((v, i) => {
					return (
						<Item key={i} $checked={v.checked}>
							<Radio onChange={handleChange}
								type="radio"
								checked={v.checked}
								value={i}
							/>
							<span>{v.name}</span>
						</Item>
					)
				})}
				<TabLabel $pos={barPos} />
			</TabForm>
			<Detail>{tabInfo[barPos].name}</Detail>
		</Area>
	);
}