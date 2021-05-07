var allData = {
    oxygen: [],
    plasma: [],
    helpline: [],
    ambulance: [],
    meds: [],
    beds: []
}


function savedata(data) {
    console.log("DATA SAVED")
    allData = data;
}

function getdata() { return allData };

module.exports = { allData, savedata, getdata }