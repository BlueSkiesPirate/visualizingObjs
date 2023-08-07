const city = document.getElementById('city')
const image = document.getElementById('image')
const DOB = document.getElementById('DOB')
const title = document.getElementById('title')
const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const age = document.getElementById('age')
const gender = document.getElementById('gender')
const streetName = document.getElementById('streetName')
const streetNumber = document.getElementById('streetNumber')
const random_btn = document.getElementById('random_btn')

random_btn.onclick = () =>{

    let num = Math.floor(Math.random() * people.results.length)

    city.innerHTML = `${people.results[num].location.city}`

    DOB.innerHTML = `${people.results[num].dob.date}`
    age.innerHTML = ` ${people.results[num].dob.age}`

    title.innerHTML = ` ${people.results[num].name.title}`
    firstName.innerHTML = `${people.results[num].name.first}`
    lastName.innerHTML = `${people.results[num].name.last}`

    gender.innerHTML = `${people.results[num].gender}`

    streetNumber.innerHTML = `${people.results[num].location.street.number} `
    streetName.innerHTML = `${people.results[num].location.street.name}`
  
    image.src = people.results[num].picture.medium
}