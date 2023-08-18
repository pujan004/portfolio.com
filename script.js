
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const hiringRadio = document.querySelector('input[name="contactReason"][value="Hiring"]');
    const hourlyRateContainer = document.getElementById("hourlyRateContainer");

    
    hiringRadio.addEventListener("change", function () {
        if (this.checked) {
            hourlyRateContainer.style.display = "block";
        } else {
            hourlyRateContainer.style.display = "none";
        }
    });

    
    const postalCodeInput = document.getElementById("postalCode");
    const postalCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    postalCodeInput.addEventListener("input", function () {
        const valid = postalCodePattern.test(this.value);
        this.setCustomValidity(valid ? "" : "Please enter a valid postal code.");
    });


    const formInputs = contactForm.querySelectorAll("input, textarea");
    formInputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.classList.add("input-focused");
        });
        input.addEventListener("blur", () => {
            input.classList.remove("input-focused");
        });
    });

   
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
    
      
       
        const successMessage = document.createElement("p");
        successMessage.textContent = "Thank you for reaching out! Your message has been received.";
        successMessage.style.color = "#27ae60"; 
        contactForm.appendChild(successMessage);
    
        
        contactForm.reset();
    
       
        if (hourlyRateContainer) {
            hourlyRateContainer.style.display = "none";
        }
    });
    
    
    
    
    
    
    
});
