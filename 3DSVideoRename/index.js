//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '100NIN03');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    var fileCounter = 0;
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        var videoNumber = '0' + fileCounter++;
        fs.rename(directoryPath + '/' + file, directoryPath + '/HNI_00' + videoNumber.substr(-2) + '.AVI', function (err) {
            if (err) throw err;
            console.log('File Renamed.');
        });
        //console.log(file);
    });
});