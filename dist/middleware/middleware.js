"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middleware = (req, res, next) => {
    let file = req.query.file;
    let wid = req.query.wid;
    let hei = req.query.hei;
    if (typeof file !== 'string' ||
        typeof +wid !== 'number' ||
        typeof +hei !== 'number') {
        console.log('not valid data has been sent in the query');
    }
    next();
};
exports.default = middleware;
