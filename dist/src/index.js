"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require("dotenv");
// `common js` uses `require()`
// const express = require('express');
// const dotenv = require('dotenv');
dotenv.config();
const app = (0, express_1.default)();
app.get("/", (_request, response) => {
    response.send("server is cool");
});
const appServer = app.listen(process.env.PORT || 3000, () => {
    console.log("server is active now");
});
exports.default = appServer;
