const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
  keyFile: "./config/credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});
exports.connect = async () => {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  return googleSheets;
};
exports.auth;
