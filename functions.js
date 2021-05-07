const { google } = require('googleapis');

const vd = require('./variableData');

function fetchallDataFromSheet() {
    google
        .sheets({
            version: "v4",
        })
        .spreadsheets.values.batchGet

        ({
            prettyPrint: false,
            majorDimension: "ROWS",
            spreadsheetId: "1K82bsBjS4z55mOmCYUx5EoT5YeEWRtACth_AQ2xVXUo",
            key: "AIzaSyDQzTE4YXZGukHlvmwoCWOFpZcTo3lU4t0",
            ranges: ["Oxygen", "Beds", "Plasma", "Meds", "Ambulance", "Volunteers/Helpline"]
        })
        .then((value) => {
            console.log("DATA RETRUEVED");
            // Saving values for all sheets inside the allData variable.
            savealldata(value.data.valueRanges)



        })
        .catch((err) => {
            console.log(err)
            console.log("ERROR");

        });
}
var keyName = ["oxygen", "beds", "plasma", "meds",
    "ambulance", "helpline"
];
var objectKeys = [
    ["state", "city", "name", "contact", "criteria", "link"],
    [
        "state",
        "city",
        "hospital",
        "bedtype",
        "contact",
        "critera",
        "link"
    ],
    [
        "state",
        "city",
        "name",
        "bloodtype",
        "contact",
        "link"
    ],
    [
        "state",
        "city",
        "medicine",
        "name",
        "contact ",
        "link"
    ],
    [
        "state",
        "city",
        "name",
        "contact ",
        "link"
    ],
    [
        "state",
        "city",
        "name",
        "contact ",

    ]


]





function savealldata(AllDataList) {

    var allData = {
        oxygen: [],
        plasma: [],
        helpline: [],
        ambulance: [],
        meds: [],
        beds: []
    }
    var i = 0,
        j = 0;
    k = 0;
    for (var i = 0; i < AllDataList.length; i++) {
        for (j = 1; j < AllDataList[i].values.length; j++) {

            var obj = {}

            for (k = 0; k < AllDataList[i].values[j].length; k++) {
                obj[objectKeys[i][k]] = AllDataList[i].values[j][k].replaceAll("\n", " / ")
            }

            allData[keyName[i]].push(obj);
        }

    }
    vd.savedata(allData)


}

// Customn replace function which is faster


String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof(str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
}

module.exports = { fetchallDataFromSheet, google }