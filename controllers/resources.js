const sheetconfig = require("../config/config");
const spreadsheetId = process.env.spreadsheet_id;

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

exports.getOxygen = async (req, res) => {
  await getAll("Oxygen", req, res);
};

exports.getOxygenByCount = async (req, res) => {
  await getCount("Oxygen", req, res);
};

exports.getBeds = async (req, res) => {
  await getAll("Beds", req, res);
};

exports.getBedsByCount = async (req, res) => {
  await getCount("Beds", req, res);
};

exports.getPlasma = async (req, res) => {
  await getAll("Plasma", req, res);
};

exports.getPlasmaByCount = async (req, res) => {
  await getCount("Plasma", req, res);
};

exports.getAmbulance = async (req, res) => {
  await getAll("Ambulance", req, res);
};

exports.getAmbulanceByCount = async (req, res) => {
  await getCount("Ambulance", req, res);
};

exports.getMeds = async (req, res) => {
  await getAll("Meds", req, res);
};

exports.getMedsByCount = async (req, res) => {
  await getCount("Meds", req, res);
};

exports.getVolunteers = async (req, res) => {
  await getAll("Volunteers/Helpline", req, res);
};

exports.getVolunteersByCount = async (req, res) => {
  await getCount("Volunteers/Helpline", req, res);
};
