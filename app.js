document.addEventListener("DOMContentLoaded", function () {
  // Navigation Highlight
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
      link.addEventListener("click", function () {
          navLinks.forEach(nav => nav.classList.remove("active"));
          this.classList.add("active");
      });
  });

  // Contact Form Submission
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
          event.preventDefault();
          alert("Thank you for contacting us! We will get back to you soon.");
          contactForm.reset();
      });
  }

  // Dynamic Dashboard Data (Simulated)
  const dashboardSection = document.querySelector("#dashboard");
  if (dashboardSection) {
      const accountBalance = document.createElement("p");
      accountBalance.textContent = "Current Balance: #5,000 (Shariah-compliant)";
      dashboardSection.appendChild(accountBalance);
  }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('userName').innerText = document.getElementById('name').value;
  alert('Signup successful!');
});

function openSignup() {
  document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
}

function sendMoney() {
  let history = document.getElementById('history-list');
  let newTransaction = document.createElement('li');
  newTransaction.innerText = 'Sent $100 to another user';
  history.appendChild(newTransaction);
  alert('Money sent successfully!');
}