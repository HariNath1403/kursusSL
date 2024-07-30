const sheetID = "1f3bapZbg0Ykn3u5Iqgnl1-HoscZfiH4YYm48sm5nKQo";
const sheetTitle = "Admin";
const sheetRange = "B1:B5";
const lastRow = 5;

const loadUrl = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?sheet=${sheetTitle}&range=${sheetRange}`;

const getRange = async function (url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const values = JSON.parse(data.substr(47).slice(0, -2))["table"]["rows"];

    const myRange = [];
    for (let i = 0; i < values.length; i++) {
      const val = values[i]["c"][0]["v"];
      myRange.push(val);
    }

    return myRange;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchMasterData = async function () {
  const myRange = await getRange(loadUrl);
  return myRange;
};

export const googleSheetLink =
  "https://script.google.com/macros/s/AKfycbxQqTCUXrFTrGiBwZ-zHo9zPyTgRzyCFT1RP6zU69fNYsuxxofC8HdwJ1T8OUwli57y/exec";
