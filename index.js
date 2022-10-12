/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lenght = document.getElementById("lenght-Convertion")
const volume = document.getElementById("volume-Convertion")
const mass = document.getElementById("mass-Convertion")
const convertBtn = document.getElementById("convert-Btn")
const inputNum = document.getElementById("input-Num")
const alertMessage = document.getElementById("alert")


convertBtn.addEventListener("click" , function() {
    
        /* Lenght section */
    const lenghtMeters = (inputNum.value*0.3048).toFixed(3)
    const lenghtFeet = (inputNum.value*3.281).toFixed(3)
    lenght.textContent = `${inputNum.value} meters = ${lenghtFeet} feet | ${inputNum.value} feet = ${lenghtMeters} meters`

    /* Volume section */
    const volumeGalons = (inputNum.value*0.264).toFixed(3)
    const volumeLiters = (inputNum.value*3.78541178).toFixed(3)
    volume.textContent = `${inputNum.value} liters = ${volumeGalons} galons | ${inputNum.value} galons = ${volumeLiters} liters`

    /* Mass section */
    const massPounds = (inputNum.value*2.204).toFixed(3)
    const massKilograms = (inputNum.value*0.45359237).toFixed(3)
    mass.textContent = `${inputNum.value} kilos = ${massPounds} pounds | ${inputNum.value} pounds = ${massKilograms} kilos`
    
})

