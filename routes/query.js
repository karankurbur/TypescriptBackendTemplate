const { asyncWrap } = require("../utils/index");

module.exports.set = (app) => {
  /**
   * Will return the X most recent blocks from the database.
   */
  app.get(
    "/get/Blocks",
    asyncWrap(async (req, res) => {
      const query = "select * from transactions order by id desc limit 50";

      // res.send({ friend: 1 });
    })
  );
};
