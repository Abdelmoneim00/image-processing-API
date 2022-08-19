"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
const Port = 8000;
app.use('/image', routes_1.default);
app.get;
app.listen(Port, () => {
    console.log(`app is now running on localhost:${Port}`);
});
console.log(fs_1.default.existsSync(`${process.cwd()}\\src\\Nasa.jpg`));
exports.default = app;
