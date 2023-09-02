import React from "react";
import styled from "styled-components";

const Explanation = ({ explanation }) => {
	return (
		<StyledExplanation>
			Explanation:
			<br />
			{explanation}
		</StyledExplanation>
	);
};

export const StyledExplanation = styled.p`
	padding: 3rem;
	margin-left: 20rem;
	margin-right: 20rem;
	display: flex;
	justify-content: center;
`;

export default Explanation;
