const form = document.querySelector("form");
const fullname = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value} <br> Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sanjidulshahin@gmail.com",
    Password: "5D96A839270996FFA1BFFB4C757D42DD4F17",
    To: "sanjidulshahin@gmail.com",
    From: email.value,
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Good job!",
        text: "Your Email is sent!",
        icon: "success",
      });
    }
  });
  form.reset();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
// Scroll reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("[data-animate]").forEach((el) => {
  observer.observe(el);
});
