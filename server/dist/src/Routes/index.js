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
    const arr = ['verb', 'adverb', 'adjective', 'noun'];
    const obj = {};
    const result = wordList.slice(0, 10).map(function () {
        let index = Math.floor(Math.random() * this.length);
        while (obj[index] && !arr.includes(wordList[index].pos)) {
            index = Math.floor(Math.random() * this.length);
        }
        obj[index] = true;
        arr.splice(arr.indexOf(wordList[index].pos), 1);
        return this.splice(index, 1)[0];
    }, wordList);
    console.log(result.length, 'result');
    res.send(result);
});
router.post('/rank', (req, res) => {
    console.log(req.body, 'body');
    const { score } = req.body;
    const obj = {};
    // get all scoreList ranks count
    for (const x of scoresList) {
        obj[x] ? (obj[x]++) : (obj[x] = 1);
    }
    // get numbers of ranks that blew score.
    let count = 0;
    for (const key in obj) {
        if (+key < score) {
            count = count + obj[key];
        }
    }
    const result = (Math.floor((count / scoresList.length) * 100));
    console.log(result, 'rank percent');
    res.status(200).send(result);
});
exports.default = router;
//# sourceMappingURL=index.js.map