//toggle
let menuList = document.getElementById('menuList')
        menuList.style.maxHeight = '0px'


        function toggleMenu(){
            if(menuList.style.maxHeight == '0px'){
                menuList.style.maxHeight = '300px'
            }
            else{
                menuList.style.maxHeight = '0px'
            }
        }




//slider
const doc = document.querySelector(".doc")
const doctor = document.querySelector(".doctor ");
const arrowBtn = document.querySelectorAll(".doc i");
const firstCardWidth = doctor.querySelector(".doctor-grp").offsetWidth;
const doctorChildrens = [...doctor.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let doctorPreView = Math.round(doctor.offsetWidth / firstCardWidth);

doctorChildrens.slice(-doctorPreView).reverse().forEach(card =>{
    doctor.insertAdjacentHTML("afterbegin", card.outerHTML);
})

doctorChildrens.slice(0,doctorPreView).reverse().forEach(card =>{
    doctor.insertAdjacentHTML("beforeend", card.outerHTML);
})

arrowBtn.forEach(btn =>{
    btn.addEventListener("click", () =>{
        doctor.scrollLeft += btn.id === "left"? -firstCardWidth : firstCardWidth;
    })
})

const dragStart = () => {
    isDragging = true;
    doctor.classList.add("dragging");

    startX = e.pageX;
    startScrollLeft = doctor.scrollLeft;
}

const dragging = (e)=> {
    if(!isDragging) return;
    doctor.scrollLeft = e.pageX;
}

const dragStop = () =>{
    isDragging = false;
    doctor.classList.remove("dragging")
}

const autoPlay = () =>{
    if(window.innerWidth < 800) return;
    timeoutId = setTimeout(() => doctor.scrollLeft += firstCardWidth, 2500);
}
autoPlay()

const InfiniteScroll = () =>{
    if(doctor.scrollLeft === 0){
      doctor.classList.add("no-transition");
      doctor.scrollLeft = doctor.scrollWidth- (2* doctor.offsetWidth);
      doctor.classList.remove("no-transition");

    }
    
    else if( Math.ceil(doctor.scrollLeft) === doctor.scrollWidth - doctor.offsetWidth){
        doctor.classList.add("no-transition");
        doctor.scrollLeft = doctor.offsetWidth;
        doctor.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if(!doc.matches(":hover")) autoPlay();
}

doctor.addEventListener("mousemove", dragStart);
doctor.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
doctor.addEventListener("scroll", InfiniteScroll);
doc.addEventListener("mouseenter", () => clearTimeout(timeoutId));
doc.addEventListener("scroll", InfiniteScroll);


// form validation

function sendEmail(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const date = document.getElementById("date");
    const time = document.getElementById("time");

const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}<br> Date: ${date.value}<br> Time: ${time.value}<br>`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jerriesvector123@gmail.com",
        Password : "DC709ACC922548C6B2919515C3F95CA850BA",
        To : 'jerriesvector12@gmail.com',
        From : 'jerriesvector12@gmail.com',
        Subject : "new contact from enquiry",
        Body : bodyMessage
    }).then(
      message => alert(message)
    )
}