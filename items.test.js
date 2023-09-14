process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("./app");
const { items } = require("./fakeDb");

const testItem = { name: "silly", price: 200 };

beforeEach(function () {
  items.push({ ...testItem });
});

afterEach(function () {
  items.length = 0;
});

describe("GET /items", function() {
  test("shows a list of items", async function() {
  const resp = await request(app).get("/items");

  expect(resp.body).toEqual({items: [testItem]});
  expect(resp.statusCode).toEqual(200);
  })

  test("shows no items for bad req", async function() {
    const resp = await request(app).get("/ites");

    expect(resp.statusCode).toEqual(404);
    })


});