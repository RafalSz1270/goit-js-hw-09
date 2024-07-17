
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".feedback-form");
    const emailInput = form.querySelector('input[name="email"]');
    const messageTextarea = form.querySelector('textarea[name="message"]');
    const STORAGE_KEY = "feedback-form-state";

    
    const loadFormData = () => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const formData = JSON.parse(savedData);
            if (formData.email) {
                emailInput.value = formData.email;
            }
            if (formData.message) {
                messageTextarea.value = formData.message;
            }
        }
    };

    
    const saveFormData = () => {
        const formData = {
            email: emailInput.value.trim(),
            message: messageTextarea.value.trim(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    };

    
    const clearFormData = () => {
        localStorage.removeItem(STORAGE_KEY);
    };

   
    form.addEventListener("input", saveFormData);

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = {
            email: emailInput.value.trim(),
            message: messageTextarea.value.trim(),
        };

        if (formData.email && formData.message) {
            console.log(formData);
            clearFormData();
            form.reset();
        } else {
            alert("Please fill out both fields.");
        }
    });

    
    loadFormData();
});
