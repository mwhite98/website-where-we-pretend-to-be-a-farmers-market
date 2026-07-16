import { html, playhtml, repeat } from "https://unpkg.com/playhtml@latest"
playhtml.init({
  cursors: {
    enabled: true,
    room: "page"
  }
})

// Generate the vistors username on page load

const firstNames = [
  'Tomato', 'Crunchy', 'Daisy', 'Sourdough', 'Dill', 'Fancy', 'Tiny', 'Jolly', 'Serene', 'Gentle',
  'Cattle', 'Pickled', 'Savoury', 'Umami', 'Regal', 'Tulip', 'Salmon', 'Onion', 'Garlic', 'Sleepy',
  'Generous', 'Tasty', 'Spicy', 'Scrumptious'
]
const lastNames = [
  'Farmer', 'Biker', 'Shopper', 'Merchant', 'Artisan', 'Baker', 'Florist', 'Walker', 'Rancher',
  'Musician', 'Wanderer', 'Maker', 'Helper', 'Craftsperson', 'Potter', 'Artificer', 'Chef', 'Chiller',
  'Dancer', 'Performer', 'Trickster', 'Dancer', 'Herder', 'Vendor'
]

const generateUserName = () => {
  const firstName = firstNames[Math.floor(Math.random()*firstNames.length)]
  const lastName = lastNames[Math.floor(Math.random()*lastNames.length)]
  const number = Math.floor(1000 + (9999 - 1000) * Math.random())

  const userName = firstName + lastName + number
  window.cursors.name = userName
  console.log('🌱 Welcome to the Haney Space Farmer\'s Market,', userName, '!')
}

// welcome visitor as they stroll through the welcome sign
const welcomeSign = document.getElementById('welcome-sign')
const welcomeMessage = document.getElementById('welcome-message')
welcomeSign.addEventListener('mouseenter', (event) => {
  welcomeMessage.querySelector('.visitor-name').textContent = window.cursors.name
  welcomeMessage.classList.add('visible')
  welcomeMessage.classList.remove('hidden')

  setTimeout(() => {
    welcomeMessage.classList.add('hidden')
    welcomeMessage.classList.remove('visible')
  }, 3000)
})

// Run certain functions on page load

generateUserName()
