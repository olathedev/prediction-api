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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const gemini_config_1 = __importDefault(require("../config/gemini-config"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const getQuestion = yield (0, gemini_config_1.default)();
        const filePath = path_1.default.join(__dirname, 'questions.json');
        fs_1.default.writeFileSync(filePath, JSON.stringify(getQuestion, null, 2));
    });
}
main().catch(() => {
    throw new Error("something went wrong");
});
