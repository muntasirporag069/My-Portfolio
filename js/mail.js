const contactForm=document.getElementById('contact-info'),
contactName=document.getElementById('contact-name'),
contactEmail=document.getElementById('contact-email'),
subject=document.getElementById('contact-subject'),
contactMessage=document.getElementById('message');

const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.send('service_w17trzk','template_5gb10nr','#contact-info','yjygLr7xL2ezYWrdw')
    .then(()=>{
        console.log("Mail sent Successfully");
    });
};

contactForm.addEventListener('submit',sendEmail);