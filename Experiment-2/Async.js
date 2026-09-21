const fs=require('fs');

fs.writeFile('sample.txt','welcome to full stack development',(err)=>{
    if(err){
        console.log('Error creating file',err);
        return;

    }
    console.log('File created sucessfully');
}
)

fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('error in reading file',err);
        return;
    }
console.log("file content:");
console.log(data);

})
fs.appendFile('sample.txt','\n semester:3',(err)=>{
    if(err){
        console.log("error updating file", err);

    }
    else{
        console.log("\n3, file updated successfully");
    }
})


fs.unlink('sample.txt','\n semester:3',(err)=>{
    if(err){
        console.log("error deleting file", err);

    }
    else{
        console.log("\n3, file deleted successfully");
    }
})