"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reSize_1 = __importDefault(require("../reSize/reSize"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const middleware_1 = __importDefault(require("../middleware/middleware"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('welcome to my Project! \n please navigate to /image route to start testing the app :)');
});
routes.get('/image', middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let Name = req.query.file;
    let wid = req.query.wid;
    let hei = req.query.hei;
    yield (0, reSize_1.default)(Name, +wid, +hei);
    try {
        res.sendFile(path_1.default.resolve('./', `${Name}_${wid}_${hei}.jpg`));
    }
    catch (_a) {
        res.send('no such file');
    }
}));
exports.default = routes;
