const expect = require("chai").expect;
const farmResponse = require("./farmResponse").getFormatted;

describe("farmer response formatting check", function () {
  it("should produce object in correct format", async function () {
    let clients = [{ id: "testId", marketname: "testMarket" }];
    let marketDetails = [
      {
        Address: "testAdd",
        GoogleLink: "testLink",
        Products: "testProd",
        Schedule: "testSch",
      },
    ];

    let expectedObj = {
      marketPlaces: [
        {
          id: "testId",
          marketName: "testMarket",
          marketDetails: {
            address: "testAdd",
            maps: {
              google: "testLink",
            },
            products: "testProd",
            schedule: "testSch",
          },
        },
      ],
    };
    expect(await farmResponse(clients, marketDetails)).to.eql(expectedObj);
  });

  it("should throw an error if either one of the parameter is null", function () {
    let clients = [];
    let marketDetails = [
      {
        Address: "testAdd",
        GoogleLink: "testLink",
        Products: "testProd",
        Schedule: "testSch",
      },
    ];

    expect(farmResponse.bind(this, [], [])).to.throw(
      "Inappropriate client and market details provided"
    );

    clients = [{ id: "testId", marketname: "testMarket" }];
    marketDetails = [];

    expect(function () {
      farmResponse(clients, marketDetails);
    }).to.throw("Inappropriate client and market details provided");
  });
});
