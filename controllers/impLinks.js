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

exports.getImpLinks = async (req, res) => {
  auth = sheetconfig.auth;
  const sheets = await sheetconfig.connect();
  try {
    const getRows = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "All",
    });
    var arg = getRows["data"]["values"].slice(1);
    var states = getUnique(1, arg);
    var cities = getUnique(2, arg);
    res.json({
      headers: getRows["data"]["values"][0],
      states: states,
      cities: cities,
      data: arg,
    });
  } catch (e) {
    res.status(400).send(`Cannot get All data`);
    console.log(e);
  }
};
