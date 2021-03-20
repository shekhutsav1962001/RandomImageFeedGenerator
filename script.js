const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5
for (let i = 0; i < rows * 4; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}/?nature,water,sunset,wallpapers
    `
    container.appendChild(img)
}
function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}
function getRandomNr() {
    var items = [300, 350,400,450, 500, 550,600,650, 700,750, 800,850, 900,950, 1000,1100,1200,1300,1400,1500,1600,1700,1800]
    var item = items[Math.floor(Math.random() * items.length)];
    return Math.floor(Math.random() * 10) + item
}