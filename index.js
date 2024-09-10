const express = require('express');
const app = express();
const port = 3000;

// Route for /subject
app.get('/subject', (req, res) => {
    res.send('ITE314');  // Returns subject code in all caps
});

// Route for /exam
app.get('/exam', (req, res) => {
    res.send('P2');  // Returns exam details
});

// Route for /node
app.get('/node', (req, res) => {
    res.send('NODEJS');  // Returns NODEJS in all caps
});

// Route for /mydata
app.get('/mydata', (req, res) => {
    const data = {
        subject: 'ITE314',
        exam: 'P2',
        node: 'NODEJS'
    };
    res.json(data);  // Returns a JSON object with subject, exam, and node
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});