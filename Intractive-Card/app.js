let form = document.querySelector('form')
let card_number = document.getElementById('card-number')
let card_name = document.getElementById('card-name')
let card_cvc = document.getElementById('cvc')
let card_year = document.getElementById('card-valid1')
let card_date = document.getElementById('card-valid')

let input_name = document.getElementById('input-name')
let input_number = document.getElementById('input-number')
let input_month = document.getElementById('input-month')
let input_year = document.getElementById('input-year')
let input_cvc = document.getElementById('input-cvc')
input_name.addEventListener('keyup', (e) =>{
    name_i = input_name.value.trim()
    card_name.innerHTML = ""
    card_name.innerHTML += name_i
 
 })
input_number.addEventListener('keyup', (e) =>{
    number_i = input_number.value.trim()
    card_number.innerHTML = ""
    card_number.innerHTML += number_i
})
input_month.addEventListener('keyup', (e) => {
    year_i = input_month.value.trim()
    card_date.innerHTML =""
    card_date.innerHTML += year_i + "/"
})

input_year.addEventListener('keyup', (e) =>{
    month_i = input_year.value.trim()
    card_year.innerHTML =""
    card_year.innerHTML += month_i
})
input_cvc.addEventListener('keyup', (e)=>{
    cvc_i = input_cvc.value.trim()
    card_cvc.innerHTML = ""
    card_cvc.innerHTML += cvc_i
})
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    form.reset()
    
})