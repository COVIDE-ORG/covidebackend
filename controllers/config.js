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
    if (metaData[status] == 200) {
      res.json("Connection Succesful");
    }else{
      res.status(400).send("Connecttion failed");
    }
  } catch {
    res.status(400).send("ServerDown");
  }
};
