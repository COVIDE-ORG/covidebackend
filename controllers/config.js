const sheetconfig = require("../config/config");
const spreadsheetId = process.env.spreadsheet_id;

exports.getMetadata = async (req, res) => {
  auth = sheetconfig.auth;
  const sheets = await sheetconfig.connect();
  try {
    const metaData = await sheets.spreadsheets.get({
      auth,
      spreadsheetId,
    });
    res.json(metaData["status"]);
  } catch {
    res.status(400).send("Cannot Check Connection");
  }
};

exports.getsheets = async (req, res) => {
  auth = sheetconfig.auth;
  const sheets = await sheetconfig.connect();
  const request = {
    spreadsheetId: spreadsheetId,
    ranges: [],
    includeGridData: false,
    auth: sheetconfig.auth,
  };

  try {
    const response = (await sheets.spreadsheets.get(request)).data;
    res.json(response["sheets"]);
  } catch (err) {
    res.status(400).send("Cannot get sheets");
  }
};
