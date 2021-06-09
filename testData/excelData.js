 var xlsx = require('xlsx')

var wb =  xlsx.readFile("C:/Users/Pradeep/Desktop/demo_webdriverIO/exceldata.xlsx")
// console.log(wb);

// var sheets = wb.SheetNames
// console.log(sheets);

var ws = wb.Sheets['xyz']
// console.log(ws);

var exceldata = xlsx.utils.sheet_to_json(ws)
// console.log(exceldata);
// console.log("=================================");
// console.log(exceldata[0].USERNAME); 
module.exports = {exceldata}