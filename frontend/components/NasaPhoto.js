import React from "react";

export const NasaPhoto = ({ url, alt }) => {
	return <img src={url} alt={alt} width="500px" height="500px" />;
};
