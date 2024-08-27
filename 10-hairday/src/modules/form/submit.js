import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual.
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data mínima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (e) => {
    e.preventDefault()

    console.log("Enviado!")
}