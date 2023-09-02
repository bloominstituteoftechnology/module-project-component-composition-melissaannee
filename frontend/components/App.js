import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaPhoto from "./NasaPhoto";
import Title from "./Title";
import Date from "./Date";
import Copyright from "./Copyright";
import Explanation from "./Explanation";

export default function App() {
	const [nasaData, setNasaData] = useState({});
	const API_URL = `http://localhost:9009/api/apod?api_key=DEMO_KEY`;
	const fetch = () => {
		let response = axios
			.get(API_URL)
			.then((data) => {
				console.log(data.data);
				setNasaData(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		fetch();
	}, []);
	return (
		<div>
			<NasaPhoto url={nasaData.url} alt="NASA Photo" />
			<Title title={nasaData.title} />
			<Date date={nasaData.date} />
			<Copyright copyright={nasaData.copyright} />
			<Explanation explanation={nasaData.explanation} />
		</div>
	);
}
