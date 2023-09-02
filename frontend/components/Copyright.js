import React from "react";
import styled from "styled-components";

const Copyright = ({ copyright }) => {
	return <StyledCopyright>Copyright: {copyright}</StyledCopyright>;
};

export const StyledCopyright = styled.p`
	font-weight: bold;
	display: flex;
	justify-content: center;
`;

export default Copyright;
