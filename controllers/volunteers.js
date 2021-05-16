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


// getCount = async (collection, req, res) => {
//   var page = req.params.page;
//   var start = 0,
//     end = 0;
//   if (page == 0) {
//     start = 2;
//     end = 50;
//   } else {
//     start = 50 * page;
//     end = 50 * (page + 1);
//   }
//   auth = sheetconfig.auth;
//   const sheets = await sheetconfig.connect();
//   try {
//     const getRows = await sheets.spreadsheets.values.batchGet({
//       auth,
//       spreadsheetId,
//       ranges: [`${collection}!1:1`, `${collection}!${start}:${end}`],
//     });
//     res.json({
//       headers: getRows["data"]["valueRanges"][0]["values"],
//       data: getRows["data"]["valueRanges"][1]["values"],
//     });
//   } catch (e) {
//     res.status(400).send(`Cannot get ${collection} data`);
//     console.log(e);
//   }
// };

exports.getVolunteers = async (req, res) => {
  auth = sheetconfig.auth;
  const sheets = await sheetconfig.connect();
  try {
    const getRows = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Volunteers/Helpline",
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

// exports.getVolunteersByCount = async (req, res) => {
//   await getCount("Volunteers/Helpline", req, res);
// };
