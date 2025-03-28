const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve attendance.html
app.get('/attendance.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'attendance.html'));
});

// Serve analytics.html
app.get('/analytics.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'analytics.html'));
});

// Serve student-form.html
app.get('/student-form.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'student-form.html'));
});

// Serve marketplace.html
app.get('/marketplace.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'marketplace.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Access the application from any device on your network using your computer's IP address`);
}); 