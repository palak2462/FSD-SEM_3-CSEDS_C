const fs = require('fs');

fs.writeFileSync("student.txt", "This is experiment-1 in FSD Workshop", "utf8");
console.log("File is created");
fs.readFileSync("Student.txt", "Myself", "utf8");
fs.writeFileSync("notes.js",)

const data = fs.readFileSync("student.txt", "utf8");
console.log("file content is", data);
fs.appendFileSync("student.txt", "\nthis is new file");

fs.writeFileSync("example.txt", "we are making this file to check unlinkSync", "utf8");
console.log("example file is created");
fs.unlinkSync("example.txt");
console.log("example file is deleted");


// create a folder
fs.mkdirSync("class folder");
console.log("New folder is created");
// fs.rmdirSync("class folder");


if(fs.existsSync('secCstudent.txt')){
    console.log('file exists');
}
else{
    console.log('file not found,need to create this');
}





