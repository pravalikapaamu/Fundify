const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(i => {

            if(i !== item){
                i.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });
});


const donationCards = document.querySelectorAll(".donation-card");

donationCards.forEach(card => {

    const amountButtons = card.querySelectorAll(".amount-grid button");
    const amountInput = card.querySelector("input");
    const donateButton = card.querySelector(".donate-main-btn");

    if (!amountInput || !donateButton) {
        return;
    }

    let donationMessage = card.querySelector(".donation-message");

    if (!donationMessage) {
        donationMessage = document.createElement("p");
        donationMessage.className = "donation-message";
        donateButton.insertAdjacentElement("afterend", donationMessage);
    }

    amountButtons.forEach(button => {

        button.addEventListener("click", () => {

            amountButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            amountInput.value = button.textContent.replace("₹", "").trim();
            donationMessage.className = "donation-message";
            donationMessage.textContent = "";

        });

    });

    donateButton.addEventListener("click", () => {

        const amount = amountInput.value.trim();

        if (amount === "") {

            donationMessage.textContent = "Please enter or select a donation amount.";
            donationMessage.className = "donation-message error";
            return;

        }

        donationMessage.textContent = "Thank you. Your donation of ₹" + amount + " has been recorded for this campaign.";
        donationMessage.className = "donation-message success";

        amountInput.value = "";
        amountButtons.forEach(btn => btn.classList.remove("active"));

    });

});


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    const contactMessage = document.getElementById("contactMessage");

    function showContactMessage(message, type) {
        contactMessage.textContent = message;
        contactMessage.className = "contact-message " + type;
    }

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || subject === "" || message === ""){

            showContactMessage("Please fill in all the fields before sending your message.", "error");
            return;

        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if(!emailPattern.test(email)){

            showContactMessage("Please enter a valid email address.", "error");
            return;

        }

        showContactMessage("Message sent successfully! We will get back to you soon.", "success");

        contactForm.reset();

    });

}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    const loginMessage = document.getElementById("loginMessage");

    function showLoginMessage(message, type) {
        loginMessage.textContent = message;
        loginMessage.className = "login-message " + type;
    }

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        if(email === "" || password === ""){

            showLoginMessage("Please enter both email and password.", "error");
            return;

        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if(!emailPattern.test(email)){

            showLoginMessage("Please enter a valid email address.", "error");
            return;

        }

        showLoginMessage("Login successful. Welcome back to Fundify.", "success");

        loginForm.reset();

    });

}


const campaignForm = document.getElementById("campaignForm");

if (campaignForm) {

    const campaignMessage = document.getElementById("campaignMessage");

    campaignForm.addEventListener("submit", function(event){

        event.preventDefault();

        const title = document.getElementById("campaignTitle").value.trim();
        const description = document.getElementById("campaignDescription").value.trim();
        const goal = document.getElementById("goalAmount").value.trim();
        const category = document.getElementById("category").value;
        const story = document.getElementById("campaignStory").value.trim();

        if(title === "" || description === "" || goal === "" || category === "" || story === ""){

            campaignMessage.textContent = "Please fill in all required fields before creating your campaign.";
            campaignMessage.className = "campaign-message error";
            return;

        }

        campaignMessage.textContent = "Campaign created successfully! Your campaign has been submitted for review.";
        campaignMessage.className = "campaign-message success";

        campaignForm.reset();

    });

}
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

if (searchInput && searchButton) {

    let searchMessage = document.querySelector(".search-message");

    if (!searchMessage) {
        searchMessage = document.createElement("p");
        searchMessage.className = "search-message";
        searchButton.closest(".search-box").insertAdjacentElement("afterend", searchMessage);
    }

    searchButton.addEventListener("click", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

        searchMessage.textContent = "";
        searchMessage.className = "search-message";

        if (searchValue.includes("healthcare") || searchValue.includes("heart")) {
            window.location.href = "heart-care.html";
        } 
        else if (searchValue.includes("education") || searchValue.includes("scholarship")) {
            window.location.href = "scholarship.html";
        } 
        else if (searchValue.includes("technology") || searchValue.includes("smart") || searchValue.includes("farming")) {
            window.location.href = "smart-farming.html";
        } 
        else if (searchValue.includes("environment") || searchValue.includes("green") || searchValue.includes("earth")) {
            window.location.href = "green-earth.html";
        } 
        else {
            searchMessage.textContent = "Campaign not found. Try Healthcare, Education, Technology, or Environment.";
            searchMessage.className = "search-message error";
        }
    });

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
}

const filterButtons = document.querySelectorAll(".category-filter button");
const campaignCards = document.querySelectorAll(".campaign-card");

if (filterButtons.length > 0 && campaignCards.length > 0) {

    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            const selectedCategory = button.textContent.toLowerCase().trim();

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            campaignCards.forEach(card => {

                const cardCategory = card.querySelector(".category").textContent.toLowerCase().trim();

                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

}
