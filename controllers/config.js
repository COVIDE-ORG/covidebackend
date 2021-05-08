const sheetconfig = require("../config/config");
const spreadsheetId = process.env.SPREADSHEET_ID;

exports.getMetadata = async (req, res) => {
  auth = sheetconfig.auth;
  const sheets = await sheetconfig.connect();
  try {
    const metaData = await sheets.spreadsheets.get({
      auth,
      spreadsheetId,
    });
    if (metaData.status == "200") {
      res.json("Connection Succesful");
    }else{
      res.status(400).send("Connecttion failed");
    }
  } catch(e) {
    console.log(e);
    res.status(400).send("ServerDown");
  }
};
