// import supertest to test routes
import supertest, { Response } from "supertest";

// import server
import appServer from ".";

// create new test suite
describe("GET /", () => {
	// create new test to check response
	it('should respond with "server is cool"', async () => {
		// get a response from get / after creating
		// new test app with supertest
		const mockResponse: Response = await supertest(appServer).get("/");
		// use jest syntax to test the .text
		// property on mockResponse to make sure
		// text is correct
		expect(mockResponse.text).toBe("server is cool");
		expect(mockResponse.status).toBe(200);
	});
});

// create new test suite
describe("GET /name", () => {
	it("should respond with a name as a string", async () => {
		const mockResponse: Response = await supertest(appServer).get("/name");
		expect(typeof mockResponse.text).toBe("string");
		expect(mockResponse.status).toBe(200);
	});
});

describe("GET /info", () => {
	it("should respond with a JSON object containing some name, and age, and a birth month", async () => {
		const mockResponse: Response = await supertest(appServer).get("/info");
		expect(typeof JSON.parse(mockResponse.text)).toBe("object");
		expect(mockResponse.status).toBe(200);
	});
});

describe("GET /US-Info", () => {
	it("should respond with an array containing all of the timezones in the United States ", async () => {
		const mockResponse: Response = await supertest(appServer).get(
			"/US-Info"
		);
		expect(typeof mockResponse.text).toBe("string");
		expect(mockResponse.status).toBe(200);
	});
	it("should confirm timezones is an array", async () => {
		const mockResponse: Response = await supertest(appServer).get(
			"/US-Info"
		);
		expect(Array.isArray(JSON.parse(mockResponse.text))).toBe(true);
		expect(mockResponse.status).toBe(200);
	});
});

// `afterEach()` is from jest.
// After each test, close the server
afterEach(() => {
	appServer.close();
});
