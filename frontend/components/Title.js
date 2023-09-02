import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
	return <StyledTitle>Title: {title} </StyledTitle>;
};

export const StyledTitle = styled.h2`
	margin-top: 2rem;
	padding: 1rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
`;

export default Title;
