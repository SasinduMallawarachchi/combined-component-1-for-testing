const emailInput = document.querySelector(".hero-1-email-input");
const getStartedBtn = document.querySelector(".hero-1-get-started-btn");
const invalidEmailTxt = document.querySelector(".hero-1-invalid-email-txt");

const validateEmail = (email) => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
};

// Email validation
getStartedBtn.addEventListener("click", () => {
  if (!validateEmail(emailInput.value)) {
    invalidEmailTxt.classList.add("hero-1-invalid-email-active");
    emailInput.classList.add("border-danger");
    return;
  }

  emailInput.classList.remove("border-danger"); // MDB Class
  invalidEmailTxt.classList.remove("hero-1-invalid-email-active");
});

// Upadate placeholder text on smaller mobile devices
window.addEventListener("resize", () => {
  const minScreenWidth = 360;
  emailInput.placeholder = "Enter your e-mail";
  if (window.innerWidth <= minScreenWidth) emailInput.placeholder = "E-mail";
});
