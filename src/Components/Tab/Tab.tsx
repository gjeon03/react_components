import { useState } from "react";
import styled from "styled-components";
import { Area, Title } from "../../Style/Styles";

const TabForm = styled.form`
	width: 500px;
	height: 30px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

const Item = styled.label`
	width: 100%;
	height: 100%;
	border: 1px solid pink;
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	position: relative;
`;

const Radio = styled.input`
	cursor: pointer;
	position: absolute;
	opacity: 0;
`;

export default function Tab() {
	const [onTab, setOnTab] = useState([
		{ name: "감자", checked: true },
		{ name: "고구마", checked: false },
		{ name: "카레라이스", checked: false }
	]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value);
		setOnTab(onTab.map((v, i) => {
			if (i + "" === event.currentTarget.value)
				return { name: v.name, checked: true };
			return { name: v.name, checked: false };
		}));
	};
	return (
		<Area>
			<Title>Tab</Title>
			<TabForm method="getea">
				{onTab.map((v, i) => {
					return (
						<Item key={i + 1}>
							<Radio onChange={handleChange}
								type="radio"
								checked={v.checked}
								value={i}
							/>
							<span>{v.name}</span>
						</Item>
					)
				})}
			</TabForm>
		</Area>
	);
}