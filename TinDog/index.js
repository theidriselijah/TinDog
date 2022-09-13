import Dog from './Dog.js'
import dogsData from './data.js'

let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

const badge = document.getElementById('badge')

document.getElementById('accept-button').addEventListener('click', yes)
document.getElementById('reject-button').addEventListener('click', no)

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

render()

function getNewDog() {
    currentDogIndex += 1
    if (currentDogIndex === 3) {
        document.getElementById('card').innerHTML = `
        <div class="no-profile-text">
            <p>There are no more profiles. Please try again later.</p>
        </div>`
    } else {
       currentDog = new Dog(dogsData[currentDogIndex])
        render() 
    }
}

function yes() {
    if (currentDogIndex < 3) {
        currentDog.setMatchStatus(true)
        setTimeout(getNewDog, 1000)
        badge.innerHTML = `
            <div>
                <img class="badge-yes" src='images/badge-like.png'>
            </div>`
        setTimeout(removeBadge, 1000)
    }
}

function no() {
    if (currentDogIndex < 3) {
        currentDog.setMatchStatus(false)
        setTimeout(getNewDog, 1000)
        badge.innerHTML = `
            <div>
                <img class="badge-no" src='images/badge-nope.png'>
            </div>`
        setTimeout(removeBadge, 1000)
    }
}

function removeBadge() {
    badge.innerHTML = ``
}