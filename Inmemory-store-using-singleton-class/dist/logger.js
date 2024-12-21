"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartLogger = void 0;
const store_1 = require("./store");
function StartLogger() {
    setInterval(() => {
        console.log(store_1.games);
    }, 5000);
}
exports.StartLogger = StartLogger;
