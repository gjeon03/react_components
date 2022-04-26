import { useState } from "react";
import styled from "styled-components";
import { Area, Title } from "../../Style/Styles";

const TabForm = styled.form`
	width: 600px;
	height: 30px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	border-bottom: 2px solid #EBEBEB;
	position: relative;
`;

const Item = styled.label<{ $checked: boolean }>`
	width: 100%;
	height: 100%;
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	position: relative;
	cursor: pointer;
	color: ${props => props.$checked ? "black" : "#aaaaaa"};
`;

const Radio = styled.input`
	position: absolute;
	opacity: 0;
`;

const TabLabel = styled.label<{ $checked: any[] }>`
	width: 200px;
	height: 2px;
	border-radius: 100px;
	position: absolute;
	bottom: -2px;
	background-color: #10AEAF;
	transition: all 0.2s ease-in-out;
	${(props) => {
		//const size = props.$checked.filter((v, i) => v.checked});
		return props.$checked[1].checked &&
			`
		transform: translate(200px, 0);
		transition: all 0.2s ease-in-out;
		`
	}}
`;

export default function Tab() {
	const [onTab, setOnTab] = useState([
		{ index: 0, name: "감자", checked: true },
		{ index: 1, name: "고구마", checked: false },
		{ index: 2, name: "카레라이스", checked: false }
	]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOnTab(onTab.map((v, i) => {
			if (i + "" === event.currentTarget.value)
				return { ...v, checked: true };
			return { ...v, checked: false };
		}));
	};
	return (
		<Area>
			<Title>Tab</Title>
			<TabForm method="getea">
				{onTab.map((v, i) => {
					return (
						<Item key={i + 1} $checked={v.checked}>
							<Radio onChange={handleChange}
								type="radio"
								checked={v.checked}
								value={i}
							/>
							<span>{v.name}</span>
						</Item>
					)
				})}
				<TabLabel $checked={onTab} />
			</TabForm>
		</Area>
	);
}