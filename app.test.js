const request = require("supertest");
const app = require("./app");

describe("Post Endpoints", () => {
  it("should create a new user", async () => {
    const response = await request(app).post("/users").send({
      full_name: "Shawn Wright",
      email: "test@mail.com",
    });
    expect(response.statusCode).toEqual(201);
  });
  it("should fail to create a new user", async () => {
    const response = await request(app).post("/users").send({
      name: "Shawn Wright",
      mail: "test@mail.com",
    });
    expect(response.statusCode).toEqual(400);
  });
  it("should create a new blog", async () => {
    const response = await request(app).post("/blogs").send({
      title: "Testing Nodejs api",
      content: "Lorem ipsum .....",
      author: "63e11ec840b1ff1b6fd802e2",
    });
    expect(response.statusCode).toEqual(201);
  });
  it("should fail to create a new blog", async () => {
    const response = await request(app).post("/blogs").send({
      title: "Testing Nodejs api",
      content: "Lorem ipsum .....",
      author: "",
    });
    expect(response.statusCode).toEqual(400);
  });
});
