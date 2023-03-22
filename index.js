const cardEl = document.querySelector(".card")
const thankYouEl = document.querySelector(".thank-you")
const submitEl = document.getElementById("submit-el")

let ratingEl = document.getElementById("rating-el")
let rates = document.querySelectorAll(".btn-number")



submitEl.addEventListener("click", function ratingResult() {
    thankYouEl.classList.remove("hidden")
    cardEl.classList.add("hidden")

})

rates.forEach((rate) =>{
    rate.addEventListener("click", () => {
        console.log(rate.innerHTML)
        ratingEl.innerHTML = rate.innerHTML
    })
})

