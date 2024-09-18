
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    console.log(height, weight);


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height"

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'please give valid weight'

    } else {
        const bmi = (weight / ((height * height) / 1000)).toFixed(2)
        results.innerHTML = `<span>Your bmi is : ${bmi}</span>`

        if (bmi < 18.6) {
            results.innerHTML = `<span>YOUR ${bmi} BMI IS UNDER WEIGHT</span>`
        }
        else if (bmi > 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>YOUR ${bmi} BMI IS NORMAL RANGE</span>`
        }
        else if (bmi > 24.9) {
            results.innerHTML = `<span> ${bmi} OVERWEIGHT</span>`
        }

    }


})

