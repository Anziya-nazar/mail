// Import nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anziyanazar26@gmail.com', 
        pass: 'amrt qqgk npnq tktd' 
    }
});

// Define email options
let mailOptions = {
    from: 'anziyanazar26@gmail.com', 
    to: 'alameenvahab@gmail.com', 
    subject: 'Test Email', 
    text: 'Hello from Node.js!' 
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred: ', error);
    } else {
        console.log('Email sent: ', info.response);
    }
});
