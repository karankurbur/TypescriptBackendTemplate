/* eslint-disable func-names */
/* eslint-disable node/no-unpublished-require */
require("dotenv").config();

console.log(process.env.PORT);
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const { expect } = chai;
chai.use(chaiHttp);

describe("Redeem Endpoints", function () {
  before(async function () {});

  beforeEach(async function () {});

  it("Succesfully create a redeem.", async function () {
    const json = {};
    const res = await chai.request(app).post("/test").send(json);
    expect(res.statusCode).to.equals(200);
  });

  after(async function () {});
});
