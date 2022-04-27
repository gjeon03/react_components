import styled from "styled-components";
import { Area, Title } from "../../Style/Styles";

const LoginForm = styled.form``;

const Box = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	span {
		margin-left: 5px;
		font-size: 12px;
		color: #666666;
	}
	input {
		height: 25px;
		border: 1px solid #cbcbcb;
		border-radius: 3px;
	}
`;

const EmailBox = styled(Box)`
	margin-bottom: 18px;
`;

const PassBox = styled(Box)``;

export default function Input() {
	return (
		<Area>
			<Title>Input</Title>
			<LoginForm method="post">
				<EmailBox>
					<span>E-mail</span>
					<input type="email" />
				</EmailBox>
				<PassBox>
					<span>Password</span>
					<input type="password" />
				</PassBox>
			</LoginForm>
		</Area>
	)
}