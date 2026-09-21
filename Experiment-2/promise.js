const fs = require("fs").promises;

async function writeFile() {
    try {
        await fs.writeFile("promise.txt", "hello students");
        console.log("File created and data written successfully");
    } catch (error) {
        console.log("Error", error);
    }
}

async function renameFile() {
    try {
        await fs.rename("promise.txt", "promise_new.txt");
        console.log("File renamed successfully");
    } catch (error) {
        console.log("Error", error);
    }
}

async function main() {
    await writeFile();
    await renameFile();
}

main();