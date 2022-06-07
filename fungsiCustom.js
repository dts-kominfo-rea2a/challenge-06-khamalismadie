// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = require("fs"); // import fs

bacaData.readFile(modifyFile1, "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
  const bacaData1 = JSON.parse(data);
  console.log(bacaData1);
});
bacaData.readFile(modifyFile2, "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
  const bacaData2 = JSON.parse(data);
  console.log(bacaData2);
});
bacaData.readFile(modifyFile3, "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
  const bacaData3 = JSON.parse(data);
  console.log(bacaData3);
});

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
