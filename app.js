const avatarContainer = document.querySelector('.avatar-container')
const avatar = document.querySelector('.avatar')
const playerChoice = document.querySelector('.playerChoice')
const computerChoice = document.querySelector('.computerChoice')
const playerAvatar = document.querySelector('.player-avatar')
const computerAvatar = document.querySelector('.computer-avatar')

let imageArray = [
    "./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg", "./images/img4.jpg", "./images/img5.jpg", "./images/img6.jpg", "./images/img7.jpg"
]

let addImage
addImage = (image) => {
    const img = document.createElement('img')
    img.src = image
    avatar.appendChild(img)
    return image
}

imageArray.forEach(image => addImage(image))

function pickAnAvatar() {
    const randomNumber = Math.floor(Math.random() * 7)+ 1
    return randomNumber
}

let avo
avatar.addEventListener('click', () => {
    avo = avatar[pickAnAvatar()]
    playerAvatar.innerHTML = avo
})

