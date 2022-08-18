"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const Port = 8000;
app.get('/image', (req, res) => {
    res.send("it's working!");
});
app.listen(Port, () => {
    console.log(`app is now running on localhost:${Port}`);
});
exports.default = app;
