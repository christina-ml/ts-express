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
// import supertest to test routes
const supertest_1 = __importDefault(require("supertest"));
// import server
const _1 = __importDefault(require("."));
// create new test suite
describe("GET /", () => {
    // create new test to check response
    it('should respond with "server is cool"', () => __awaiter(void 0, void 0, void 0, function* () {
        // get a response from get / after creating
        // new test app with supertest
        const mockResponse = yield (0, supertest_1.default)(_1.default).get("/");
        // use jest syntax to test the .text
        // property on mockResponse to make sure
        // text is correct
        expect(mockResponse.text).toBe("server is cool");
        expect(mockResponse.status).toBe(200);
    }));
});
// `afterEach()` is from jest.
// After each test, close the server
afterEach(() => {
    _1.default.close();
});
