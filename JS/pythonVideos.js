const videos = document.querySelector('.videoBox');

function newDiv(title, address, text) {
    const videoBox = document.createElement('div');
    videoBox.className = 'card col-md-6 col-12';
    videoBox.style = 'width: 100%';
    videos.appendChild(videoBox);
    const videoCard = document.createElement('div');
    videoCard.className = 'card-header';
    videoBox.appendChild(videoCard);
    const cardTitle = document.createElement("h4");
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;
    videoCard.appendChild(cardTitle);
    const extraDiv = document.createElement('div');
    extraDiv.className = 'extra-div';
    videoCard.appendChild(extraDiv);
    const videoFrame = document.createElement('iframe');
    videoFrame.width = '100%';
    videoFrame.height = '315';
    videoFrame.src = address;
    videoFrame.frameBorder = '0';
    videoFrame.allowFullscreen;
    extraDiv.appendChild(videoFrame);
    const cardBody = document.createElement('div');
    cardBody.classname = 'card-body';
    extraDiv.appendChild(cardBody);
    const cardText = document.createElement('p');
    cardText.classname = 'card-text';
    cardText.textContent = text;
    cardBody.appendChild(cardText);
}

const pythonVideos = [
    {card_title: 'Python Tabs and Indentation', address: 'https://www.youtube.com/embed/3XbPF2saKck', card_text:'This video demonstrates how to structure your python code using tab spacing to define blocks with examples and a little bit of visualization.'},
    {card_title: 'Python Data Types - Strings', address: 'https://www.youtube.com/embed/BgoUPzkGlwU', card_text: "This video introduces the concept of string data types in Python with examples. It's important to understand data types because each type is handled differently in the computer's memory and each functions differently when programming."},
    {card_title: 'Python Data Types - Boolean', address: 'https://www.youtube.com/embed/RrvjoSY5FnI', card_text: "This video introduces the concept of boolean data types in Python with examples. It's important to understand data types because each type is handled differently in the computer's "},
    {card_title: 'Python Data Types - Numbers', address: 'https://www.youtube.com/embed/jagQT1BhXfw', card_text: "This video introduces the concept of numeric data types in python with examples. It's important to understand data types because each type is handled differently in the computer's memory and each functions differently when programming."},
    {card_title: 'SNHU Intro to Scripting - Account Transactions', address: 'https://www.youtube.com/embed/6l88pu9Ba94', card_text: "This video demonstrates more file I/O with a practical example using two files, one for account information and one for a list of transactions to carry out on the accounts."},
    {card_title: 'SNHU Intro to Scripting - Regular Expression Basics', address: 'https://www.youtube.com/embed/0gUhbDreiTs', card_text: "This video demonstrates very simple regular expression (regex) pattern matching in Python."},
    {card_title: 'SNHU Intro to Scripting - Variable Length File', address: 'https://www.youtube.com/embed/NjJJfPKExKE', card_text: "This video demonstrates how to read a character delimited text file into a workable data structure, modify the data, reformat the data for output, and write that output back to the file using the power of functions. If you have not yet seen my video on File I/O basics and working with a length delimited file, I recommend checking those out first"},
    {card_title: 'SNHU Intro to Scripting - Fixed Length File', address: 'https://www.youtube.com/embed/WXW_sUridko', card_text: "This video demonstrates how to parse data from a text file that is formatted with fields of a specific length filled with extra spaces as needed."},
    {card_title: 'SNHU Intro to Scripting - Basic Read/Write Files', address: 'https://www.youtube.com/embed/cj8-F2TazlE', card_text: "This video demonstrates reading and writing simple text files using Python."},
    {card_title: 'SNHU Intro to Scripting - ATM Script', address: 'https://www.youtube.com/embed/UR7o14jgS5g', card_text: "This video demonstrates a practical use of functions to perform some simple bank transactions."},
    {card_title: 'SNHU Intro to Scripting - Function Basics', address: 'https://www.youtube.com/embed/Jfty6Uut_U4', card_text: "This video demonstrates the basics of defining and executing functions in Python"},
    {card_title: 'SNHU Intro to Scripting - Grocery List', address: 'https://www.youtube.com/embed/ZpNbFrMcqMo', card_text: "This is a demonstration of the grocery list script using the dictionary and list data type along with both loop types."},
];
for (i=0; i<pythonVideos.length; i++){
    newDiv(pythonVideos[i].card_title, pythonVideos[i].address, pythonVideos[i].card_text);
}

