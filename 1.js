const bg = document.getElementById('background');
window.addEventListener('scroll', function(){
    bg.style.backgroundSize = 160 - +window.pageYOffset/12+'%';
})

const totop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        totop.classList.add("active");
    }else{
        totop.classList.remove("active");
    }
});

const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("mail");
const message = document.getElementById("mess");
const phone = document.getElementById("phone");

function sendEmail(){
    const bodymessage = `Name: ${fullname.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value}<br> Message: ${message.value}`;


    Email.send({
        // SecureToken:
        Host : "smtp.elasticemail.com",
        Username : "methuy115@gmail.com",
        Password : "B87124840C284FC7423B6EE1B1CAE969674A",
        To : 'methuy115@gmail.com',
        From : 'methuy115@gmail.com',
        Subject : "Feedback from customers",
        Body : bodymessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Thanks Your Feedback",
                showConfirmButton: false,
                timer: 2000
              });
        }
      }
    );
}

function checkinputs(){
    const input = document.querySelectorAll(".contact-input");

    for (const item of input ){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

    item.addEventListener("keyup", () => {
        if(item.value != ""){
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
        else{
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    })
    }
}

form.addEventListener("submit", (e) => { 
      e.preventDefault();
      sendEmail();
     
      form.reset();
      return false;
});

