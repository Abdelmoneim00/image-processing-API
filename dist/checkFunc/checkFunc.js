"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkName = exports.check = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function check(first, second, third) {
    if (typeof first !== 'string' ||
        isNaN(+second) ||
        typeof +third !== 'number') {
        return false;
    }
}
exports.check = check;
function checkName(para) {
    if (fs_1.default.existsSync(path_1.default.resolve('./', `${para}.jpg`))) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkName = checkName;
