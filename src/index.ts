import express, { Express, Request, Response } from "express";
import dotenv = require("dotenv");

// `common js` uses `require()`
// const express = require('express');
// const dotenv = require('dotenv');
dotenv.config();

const app: Express = express();
app.get("/", (_request: Request, response: Response) => {
	response.send("server is cool");
});

app.get("/name", (_request: Request, response: Response) => {
	const name: string = "Christina";
	response.send(`responds with a string containing some name ${name}`);
});

app.get("/info", (_request: Request, response: Response) => {
	interface infoObjProps {
		name: string;
		age: number;
		birthMonth: string;
	}
	const infoObj: infoObjProps = {
		name: "Khalid",
		age: 26,
		birthMonth: "February",
	};
	response.json({ person: infoObj });
});

app.get("/US-Info", (_request: Request, response: Response) => {
	fetch("https://restcountries.com/v3.1/name/us")
		.then((response) => response.json())
		.then((data) => {
			response.json(data[0].timezones);
		});
});

const appServer = app.listen(process.env.PORT || 3000, () => {
	console.log("server is active now");
});

export default appServer;
