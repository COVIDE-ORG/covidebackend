const sheetconfig = require("../config/config");
const spreadsheetId = process.env.SPREADSHEET_ID;

getAll = async (collection, req, res) => {
  auth = sheetconfig.auth;
  const sheets = await sheetconfig.connect();
  try {
    const getRows = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: collection,
    });
    res.json({
      headers: getRows["data"]["values"][0],
      data: getRows["data"]["values"].slice(1),
    });
  } catch (e) {
    res.status(400).send(`Cannot get ${collection} data`);
    console.log(e);
  }
};

getCount = async (collection, req, res) => {
  var page = req.params.page;
  var start = 0,
    end = 0;
  if (page == 0) {
    start = 2;
    end = 50;
  } else {
    start = 50 * page;
    end = 50 * (page + 1);
  }
  auth = sheetconfig.auth;
  const sheets = await sheetconfig.connect();
  try {
    const getRows = await sheets.spreadsheets.values.batchGet({
      auth,
      spreadsheetId,
      ranges: [`${collection}!1:1`, `${collection}!${start}:${end}`],
    });
    res.json({
      headers: getRows["data"]["valueRanges"][0]["values"],
      data: getRows["data"]["valueRanges"][1]["values"],
    });
  } catch (e) {
    res.status(400).send(`Cannot get ${collection} data`);
    console.log(e);
  }
};

exports.getVolunteers = async (req, res) => {
  await getAll("Volunteers/Helpline", req, res);
};

// exports.getVolunteersByCount = async (req, res) => {
//   await getCount("Volunteers/Helpline", req, res);
// };
