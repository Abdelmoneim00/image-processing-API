"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const process_1 = require("process");
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    fs_1.default.readFile(`${(0, process_1.cwd)()}\\src\\Nasa.jpg`, (err, data) => {
        if (err)
            throw err;
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data);
    });
});
exports.default = routes;
