import styled from "styled-components";

export const NumBox = styled.div`
	width: 400px;
	height: 60px;
	border: 1px solid #aaaaaa;
	border-radius: 5px;
	display: flex;
	justify-content: end;
	align-items: center;
	span {
		margin-right: 40px;
		font-weight: 700;
	}
	span:first-child {
		color: black;
		font-size: 20px;
	}
	span:last-child {
		color: #aaaaaa;
		font-size: 14px;
	}
`;

export const SliderBox = styled.div`
	width: 400px;
	margin-top: 20px;
	position: relative;
`;

export const Range = styled.input`
	width: 100%;
	height: 5px;
	-webkit-appearance: none;
	border-radius: 2.5px;
	background: #EBEBEB;
	outline: none;
	opacity: 0;
	position: absolute;
	z-index:2;
	::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: #10AEAF;
		cursor: pointer;
		z-index: 10;
	}
`;

export const SliderNumBox = styled.div`
	width: 400px;
	position: absolute;
	top: 20px;
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
`;

export const SliderNum = styled.div`
	width: 40px;
	height: 20px;
	text-align: center;
	border-radius: 10px;
	font-size: 12px;
	background-color: #EBEBEB;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #aaaaaa;
	cursor: pointer;
	:hover {
		background-color: #10AEAF;
		color: white;
	}
`;

export const SliderBar = styled.div`
	width: 400px;
	height: 5px;
	border-radius: 2.5px;
	position: absolute;
	top: 2px;
	background-color: #EBEBEB;
	display: flex;
	justify-content: space-between;
	z-index:1;
`;

export const SliderCircle = styled.div<{ $pos: number }>`
	width: 20px;
	height: 20px;
	border: 3px solid white;
	border-radius: 50%;
	background: #10AEAF;
	position: absolute;
	top: -11px;
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3), 0 7px 15px rgba(0, 0, 0, 0.06);
	z-index:1;
	${(props) => {
		//좌측에 맞춰지기에 400에서 원크기 26을 뺀 374를 백분율로 나타낸다.
		const size = props.$pos === 1 ? 0 : props.$pos;
		if (size) {
			return (`
			transform: translate(${374 * size / 100}px, 0);
			transition: all 0s ease-in-out;
			`);
		}
	}}
`;

export const SliderBarCircle = styled.div<{ $pos: number, $idx: number }>`
	width: 17px;
	height: 17px;
	border-radius: 50%;
	margin-top: -6px;
	background-color: #EBEBEB;
	${props => {
		if (props.$idx * 25 < props.$pos)
			return `background-color: #10AEAF;`;
	}}
`;

export const LowerCover = styled.label<{ $pos: number }>`
	width: ${props => props.$pos}%;
	height: 5px;
	position: absolute;
	top: 0;
	border-radius: 2.5px;
	background-color: #10AEAF;
`;