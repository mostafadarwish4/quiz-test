"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const port = 5000;
app.use(express_1.default.json({ strict: false }));
app.use((0, cors_1.default)({
    origin: '*'
}));
app.get('/', (req, res) => {
    res.send('Hello To Vocabulary Api');
});
app.use(Routes_1.default);
app.listen(port, () => {
    return console.log(`App is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map