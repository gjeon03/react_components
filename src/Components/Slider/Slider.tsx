import { useState } from "react";
import {
	NumBox,
	SliderBox,
	Range,
	SliderNumBox,
	SliderNum,
	SliderBar,
	SliderCircle,
	SliderBarCircle,
	LowerCover
} from "./Style";
import { Area, Title } from "../../Style/Styles";

export default function Slider() {
	const [num, setNum] = useState<number>(50);
	const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
		const num = parseInt(e.currentTarget.value);
		setNum(num);
	};
	const handleSliderNum = (num: number) => {
		setNum(num);
	};
	return (
		<Area>
			<Title>Slider</Title>
			<NumBox>
				<span>{num}</span>
				<span>%</span>
			</NumBox>
			<SliderBox>
				<Range
					type="range"
					min="1"
					max="100"
					value={num}
					onChange={handleSlider} />
				<SliderBar>
					<SliderCircle $pos={num} />
					{Array(5).fill(0).map((v, i) =>
						<SliderBarCircle key={i} $pos={num} $idx={i} />
					)}
					<LowerCover $pos={num} />
				</SliderBar>
				<SliderNumBox>
					{Array(5).fill(0).map((v, i) => {
						const num = (i * 25) || 1;
						return <SliderNum
							key={i}
							onClick={() => (handleSliderNum(num))}
						>
							<span>{num}%</span>
						</SliderNum>
					})}
				</SliderNumBox>
			</SliderBox>
		</Area>
	);
}