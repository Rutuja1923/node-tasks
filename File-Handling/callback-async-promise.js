const fs = require('fs');

fs.readFile('data.txt', 'utf8', (error, data) => {
    if (error) {
        console.error(`Error reading the file using callback function: ${error.message}`);
        return;
    }
    console.log(`File content using callback function : ${data}`);
});


fs.promises.readFile('data.txt', 'utf8')
    .then((data) => {
        console.log(`File content using promises : ${data}`);
    })
    .catch((error) => {
        console.error(`Error reading the file using promises : ${error.message}`);
    });
  
  
const readFileAsync = async () => {
  try {
    const data = await fs.promises.readFile('data.txt', 'utf8');
    console.log(`File content using async-await : ${data}`);
  } catch (error) {
    console.error(`Error reading the file using async-await : ${error.message}`);
  }
}

readFileAsync();