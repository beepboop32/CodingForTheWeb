



document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const feedback = document.getElementById("feedback");
    feedback.style.display = "block";

    const form = document.getElementById("contactForm");
    
    const fields = form.querySelectorAll("input[type='text'], textarea, select");
    let allFilled = true;
    //remove whitespace from inputs bc people are silly billy (me testing)
    fields.forEach(field => {
        if (!field.value.trim()) {
            allFilled = false;
        }
    });

    //validation check for all the fields
    
    if (allFilled) {
        feedback.textContent = "Form submitted successfully!";
        feedback.style.color = "green";
        feedback.style.fontWeight = "bold";
    } else {
        feedback.textContent = "Please fill out all fields.";
        feedback.style.color = "red";
        feedback.style.fontWeight = "bold";
    }
});


function contactPage() {
    window.open("../Contact/contact.html");
}