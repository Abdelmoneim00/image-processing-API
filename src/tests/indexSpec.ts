import app from "..";
import supertest from "supertest";
import fs from "fs"



const request = supertest(app);



describe("tests for the endpoint", () => {
    it("should return OK status", async () => {
        const response = await request.get("/image");
        expect(response.status).toBe(200);
    });
    it("should check if the image is in the file", () => {
        const path =`${__dirname}/Nasa.jpg`;
        expect(fs.existsSync(path)).toBe(true);
    })
})


