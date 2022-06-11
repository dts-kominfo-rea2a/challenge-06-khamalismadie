// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

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
const bacaData = (fnCallback) => {
  fs.readFile(file1, "utf8", (err, data1) => {
    if (err) {
      fnCallback(err, null);
    }
    fs.readFile(file2, "utf8", (err, data2) => {
      if (err) {
        fnCallback(err, null);
      }
      fs.readFile(file3, "utf8", (err, data3) => {
        if (err) {
          fnCallback(err, null);
        }
        const hasilData = [];
        let data1Json = JSON.parse(data1).message.slice(5);
        hasilData.push(data1Json);
        let data2Json = JSON.parse(data2);
        data2Json.forEach((element) => {
          hasilData.push(element.message.slice(5));
        });
        const data3Json = JSON.parse(data3);
        data3Json.forEach((element) => {
          hasilData.push(element.data.message.slice(5));
        });
        fnCallback(err, hasilData);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
