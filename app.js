var express = require("express");
 var nodemailer = require('nodemailer');
  var sender_email =<<your_email>>;
  var sender_pass=<<your_pass>>;
 



var app = express();
app.use(express.urlencoded());
app.use(express.json());

app.get('/',(req,res)=>{res.send("hi");});

app.get('/:email',(req,res)=>{
	var emaill =req.params.email ;
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: sender_email,
    pass: sender_pass
  }
});
var no= Math.floor(100000 + Math.random() * 900000);
  let mailOptions = {
    from: sender_email,
    to: emaill,
    subject: 'Password recovery code',
    text: "Enter this code for password recovery: "+no
  };

  transporter.sendMail(mailOptions, (err,data)=>{
    if(err) throw err;
      console.log("sent");
      res.json({passcode:no});
  })
});
app.listen(process.env.PORT);
