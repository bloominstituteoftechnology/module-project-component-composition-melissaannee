import React from "react";
import styled from "styled-components";

const NasaPhoto = ({ url, alt }) => {
	return (
		<StyledDiv>
			<StyledNasaPhoto src={url} alt={alt} />;
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
`;

export const StyledNasaPhoto = styled.img`
	width: 400px;
	height: 400px;
	border-radius: 25%;
`;

export default NasaPhoto;
