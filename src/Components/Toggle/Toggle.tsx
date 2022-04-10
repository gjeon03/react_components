import { useState } from "react";
import styled, { keyframes } from "styled-components";

const ToggleArea = styled.div`
	width: auto;
	height: 150px;
`;

const Title = styled.h1``;

const ToggleBox = styled.div`
	width: 400px;
	height: 40px;
	display: grid;
	border-radius: 100px;
	grid-template-columns: repeat(2, 1fr);
	background-color: #EBEBEB;
	position: relative;
`;

const ToggleName = styled.div<{ toggle: boolean }>`
	margin: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
	z-index: 1;
	${props => props.toggle && "color: #aaaaaa"};
`;

const ToggleLabel = styled.label<{ toggle: boolean }>`
	width: 194px;
	height: 34px;
	border-radius: 100px;
	position: absolute;
	top: 3px;
	left: 3px;
	background-color: white;
	transition: all 0.2s ease-in-out;
	${(props) => props.toggle &&
		`
		transform: translate(200px, 0);
		transition: all 0.2s ease-in-out;
		`
	}
`;

const Detail = styled.span`
	width: 400px;
	height: 30px;
	margin-top: 10px;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Toggle() {
	const [toggle, setToggle] = useState<boolean>(false);
	const switchHandler = (flag: Boolean) => {
		if (flag && toggle)
			setToggle(false);
		else if (!flag && !toggle)
			setToggle(true);
	};
	return (
		<ToggleArea>
			<Title>Toggle</Title>
			<ToggleBox>
				<ToggleName
					toggle={toggle}
					onClick={() => switchHandler(true)}>
					<span>기본</span>
				</ToggleName>
				<ToggleName
					toggle={!toggle}
					onClick={() => switchHandler(false)}>
					<span>상세</span>
				</ToggleName>
				<ToggleLabel toggle={toggle} />
			</ToggleBox>
			<Detail>{toggle ? "상세" : "기본"}</Detail>
		</ToggleArea>
	);
}