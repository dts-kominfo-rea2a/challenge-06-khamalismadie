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
const bacaData = (fnCallback) => {
  fs.readFile(
    file1,
    "utf8",
    function (err, data1) {
      if (err) {
        return fnCallback(err, data1);
      } else {
        let dataJson1 = JSON.parse(data1);
        let jsonFile1 = jsonFile1.message.split(" ");
        let arrJson1 = dataJson1.filter((isiData) => isiData.length >= 2);
      }
    },
    fs.readFile(
      file2,
      "utf8",
      function (err, data2) {
        if (err) {
          return fnCallback(err, data2);
        } else {
          let dataparse2 = JSON.parse(data2);
          let jsonFile2 = jsonFile2.message.split(" ");
          let arrJson2 = dataJson2.filter((isiData) => isiData.length >= 2);
        }
      },
      fs.readFile(file3, "utf8", function (err, data3) {
        if (err) {
          return fnCallback(err, data3);
        } else {
          let dataparse3 = JSON.parse(data3);
          let jsonFile3 = jsonFile3.message.split(" ");
          let arrJson3 = dataJson3.filter((isiData) => isiData.length >= 2);
        }
        let hasil = [arrJson1[1], arrJson2[1], arrJson3[1]];
        return fnCallback(err, hasil);
      })
    )
  );
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
