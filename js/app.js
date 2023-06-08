const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector('.price-total');
const clickDate = document.querySelector('.session-date-item');


clickDate.addEventListener('click', (event)) => {
    if (!event.toggle.classList.toggle(''))

}

let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle('active')
        totalPrice = 800;
        let totalSeats = schemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});