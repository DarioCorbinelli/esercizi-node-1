import supertest from "supertest";

import app from "./app"

const req = supertest(app)

//@ts-ignore
test("Get /planets", async() => {
  const res = await req
                        .get("/planets")
                        .expect(200)
                        .expect("Content-Type", /application\/json/)
     
  //@ts-ignore
  expect(res.body).toEqual([
    {name: "Mercury"},
    {name: "Venus"}
  ])
})