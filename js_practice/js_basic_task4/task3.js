const emails = ["example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com"];

const gmailEmails = emails.filter(email => email.includes('gmail.com'));

console.log("Емейли з 'gmail.com':", gmailEmails);