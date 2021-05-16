const sheetconfig = require("../config/config");
const spreadsheetId = process.env.SPREADSHEET_ID;
getUnique = (index, arg) => {
  var output = [];
  var count = 0;
  var start = false;
  var j, k;
  for (j = 0; j < arg.length; j++) {
    for (k = 0; k < output.length; k++) {
      if (arg[j][index] == output[k]) {
        start = true;
      }
    }
    count++;
    if (count == 1 && start == false) {
      output.push(arg[j][index]);
    }
    start = false;
    count = 0;
  }
  return output;
};
exports.getHelp = async (req, res) => {
  auth = sheetconfig.auth;
  const sheets = await sheetconfig.connect();
  try {
    const getRows = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Help",
    });
    var arg = getRows["data"]["values"].slice(1);
    var states = getUnique(0, arg);
    var cities = getUnique(1, arg);
    res.json({
      headers: getRows["data"]["values"][0],
      states: states,
      cities: cities,
      data: arg,
    });
  } catch (e) {
    res.status(400).send(`Cannot get ${collection} data`);
    console.log(e);
  }
};

exports.addHelp = async (req, res) => {
  auth = sheetconfig.auth;
  const sheets = await sheetconfig.connect();
  try {
    const createRow = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Help",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      resource: {
        values: [
          [
            req.body.Place,
            req.body.Age,
            req.body.SpO2,
            req.body.AdmittedIn,
            req.body.Requirement,
            req.body.Name,
            req.body.ContactNo,
            req.body.AlternateNo,
          ],
        ],
      },
    });
    res.send(createRow["statusText"]);
  } catch (e) {
    res.status(400).send(`Cannot create help data`);
    console.log(e);
  }
};
