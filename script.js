const wrapper = document.querySelector(".wrapper")
input = wrapper.querySelector(".form input")
button =wrapper.querySelector(".form button");
image= wrapper.querySelector(".qr-code img")

button.addEventListener("click", () => {
    let value=input.value;
    if(!value) return;
    image.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    wrapper.classList.add("active");
})