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
  arrData = [];

  fs.readFile(file1, "utf8", function (err, data) {
    if (err) {
      return fnCallback(err, null);
    } else {
      let dataparse = JSON.parse(data);
      let hasil = dataparse.message.split(" ");
      arrData.push(hasil[1]);
    }
  });
  fs.readFile(file2, "utf8", function (err, data) {
    if (err) {
      return fnCallback(err, null);
    } else {
      let dataparse = JSON.parse(data);
      let hasil = dataparse.message.split(" ");
      arrData.push(hasil[1]);
    }
  });
  fs.readFile(file3, "utf8", function (err, data) {
    if (err) {
      return fnCallback(err, null);
    } else {
      let dataparse = JSON.parse(data);
      let hasil = dataparse.message.split(" ");
      arrData.push(hasil[1]);
    }
  });
  return fnCallback(err, arrData);
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
