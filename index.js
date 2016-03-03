$( document ).ready(function() {
    
});

email = function(emailAddress, subject, body) {
    emailjs.send("gmail","blank",
    {
        fromName: "Cam Records Marketing",
        fromEmail: "noreply@camrecords.com",
        toEmail: emailAddress,
        subject: subject,
        emailBody: body
    });
}