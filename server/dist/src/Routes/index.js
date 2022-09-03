"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TestData_1 = __importDefault(require("../../TestData"));
const { wordList, scoresList } = JSON.parse(TestData_1.default);
const router = (0, express_1.Router)();
router.get('/words', (req, res) => {
    const result = wordList.slice(0, 10);
    // .map(function(){
    //     return this.splice(Math.floor(Math.random()*this.length),1)
    // })
    res.send(result);
});
router.post('/rank', (req, res) => {
    const { score } = req.body;
    const obj = {};
    // for(let x in scoresList ){
    // }
    res.send();
});
exports.default = router;
//# sourceMappingURL=index.js.map