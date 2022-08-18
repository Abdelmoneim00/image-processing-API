import app from "..";
import supertest from "supertest";

const request = supertest(app);


describe("tests for the endpoint", () => {
    it("should return OK status", async () => {
        const response = await request.get("/image");
        expect(response.status).toBe(200);
    })
})


