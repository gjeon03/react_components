import styled from "styled-components";

export const TabForm = styled.form`
	width: 600px;
	height: 30px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	border-bottom: 2px solid #EBEBEB;
	position: relative;
`;

export const Item = styled.label<{ $checked: boolean }>`
	width: 100%;
	height: 100%;
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	position: relative;
	cursor: pointer;
	color: ${props => props.$checked ? "black" : "#aaaaaa"};
`;

export const Radio = styled.input`
	position: absolute;
	opacity: 0;
`;

export const TabLabel = styled.label<{ $pos: number }>`
	width: 200px;
	height: 2px;
	border-radius: 100px;
	position: absolute;
	bottom: -2px;
	background-color: #10AEAF;
	transition: all 0.2s ease-in-out;
	${(props) => {
		const size = props.$pos * 200;
		if (size) {
			return (`
			transform: translate(${size}px, 0);
			transition: all 0.2s ease-in-out;
			`);
		}
	}}
`;