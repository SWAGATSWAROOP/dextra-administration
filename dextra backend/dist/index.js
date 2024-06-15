"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded());
app.use(express_1.default.static("./public"));
app.use("/", (req, res) => {
    res.send("Working");
});
const port = process.env.port;
app.listen(port, () => {
    console.log(`listening at port number ${port}`);
});
