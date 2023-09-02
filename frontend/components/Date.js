import React from "react";
import styled from "styled-components";

const Date = ({ date }) => {
	return <StyledDate>Date: {date}</StyledDate>;
};

export const StyledDate = styled.p`
	font-weight: bold;
	font-size: 16px;
	display: flex;
	justify-content: center;
`;

export default Date;
