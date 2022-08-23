"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middleware = (req, res, next) => {
    let file = req.query.file;
    let wid = req.query.wid;
    let hei = req.query.hei;
    if (typeof file !== 'string' ||
        typeof wid !== 'string' ||
        typeof hei !== 'string') {
        res.send('it seems you used wrong numbers or query');
    }
    next();
};
exports.default = middleware;
