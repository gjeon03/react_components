import { useState } from "react";
import {
	ToggleBox,
	ToggleName,
	ToggleLabel
} from "./Style";
import { Area, Title, Detail } from "../../Style/Styles";

export default function Toggle() {
	const [toggle, setToggle] = useState<boolean>(false);
	const switchHandler = (flag: Boolean) => {
		if (flag && toggle)
			setToggle(false);
		else if (!flag && !toggle)
			setToggle(true);
	};
	return (
		<Area>
			<Title>Toggle</Title>
			<ToggleBox>
				<ToggleName
					$toggle={toggle}
					onClick={() => switchHandler(true)}>
					기본
				</ToggleName>
				<ToggleName
					$toggle={!toggle}
					onClick={() => switchHandler(false)}>
					상세
				</ToggleName>
				<ToggleLabel $toggle={toggle} />
			</ToggleBox>
			<Detail>{toggle ? "상세" : "기본"}</Detail>
		</Area>
	);
}