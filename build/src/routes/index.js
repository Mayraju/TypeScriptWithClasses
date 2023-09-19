"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_1 = __importDefault(require("./register"));
class Routes {
    constructor() {
        this.app = (0, express_1.default)();
        this.app = (0, express_1.default)();
        this.initiateRoutes();
    }
    initiateRoutes() {
        this.app.get("/", (req, res) => {
            res.send("*****************************In routes fils********************************");
        });
        this.app.use("/register", new register_1.default().getRoutes());
    }
    getApp() {
        return this.app;
    }
}
exports.default = Routes;
