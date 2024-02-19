
// for image filtering

const liItem = document.querySelectorAll("ul li")
const imgItem = document.querySelectorAll(".prod img")
liItem.forEach(li => {
  li.onclick = function () {
    //active
    liItem.forEach(li => {
      li.className = ""
    })
    li.className = "active";
    //filter
    const value = li.textContent;
    imgItem.forEach(img => {
      img.style.display = "none";

      if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All") {

        img.style.display = "block";
      }
    })
  }
});









let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("test1");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}