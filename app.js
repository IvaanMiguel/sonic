const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const skyColor = '#2000A0'

const groundColor1 = '#652700'
const groundColor2 = '#b85b00'

const grassColors = ['#80e000', '#40a000', '#006000']
const groundShadow = 'rgb(0 0 0 / .5)'

const ringColor = '#fcfc01'

const trunkColor = '#804000'
const palmLeafColor = '#80e000'

const sunflowerStemColor = '#40a000'
const sunflowerCenterColor = '#406040'
const sunflowerPetalsColor = '#e0e000'

const tilesPerColumn = 4
const tileSize = 30
const groundHeight = tilesPerColumn * tileSize
const tilesPerRow = Math.ceil(canvas.width / tileSize)

const grassSize = tileSize * .5
const grassHeight = groundHeight + grassSize * (grassColors.length - 2) + tileSize * .3

const ringsHeight = 40
const ringsRadius = 20

const trunkWidth = 15
const trunkHeight = 230

const stemWidth = 10
const stemHeight = 100
const sunflowerRadius = 40

ctx.fillStyle = skyColor
ctx.fillRect(0, 0, canvas.width, canvas.height)

function drawGround() {
  let color1 = true

  for (let col = canvas.height - groundHeight; col < canvas.height; col += tileSize) {
    for (let row = 0; row < tilesPerRow * tileSize; row += tileSize) {
      ctx.fillStyle = color1 ? groundColor1 : groundColor2
      ctx.fillRect(row, col, tileSize, tileSize)
      color1 = !color1
    }
    if (tilesPerRow % 2 === 0) color1 = !color1
  }

  ctx.fillStyle = groundShadow
  ctx.fillRect(0, canvas.height - groundHeight, canvas.width, tileSize * 1.5)

  grassColors.forEach((color, i) => {
    ctx.fillStyle = color
    ctx.fillRect(0, canvas.height - grassHeight + grassSize * i, canvas.width, grassSize)
  })
}

function drawRing(x) {
  ctx.strokeStyle = ringColor
  ctx.lineWidth = 4

  ctx.beginPath()
  ctx.arc(x, canvas.height - grassHeight - ringsHeight, ringsRadius, 0, Math.PI * 2)
  ctx.stroke()
}

function drawSunflower(x) {
  ctx.fillStyle = sunflowerStemColor
  ctx.fillRect(x, canvas.height - grassHeight, stemWidth, -stemHeight)

  ctx.fillStyle = sunflowerPetalsColor
  ctx.beginPath()
  ctx.arc(x + stemWidth / 2, canvas.height - grassHeight - stemHeight, sunflowerRadius, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = sunflowerCenterColor
  ctx.beginPath()
  ctx.arc(x + stemWidth / 2, canvas.height - grassHeight - stemHeight, sunflowerRadius - 20, 0, Math.PI * 2)
  ctx.fill()
}

function drawTree(x) {
  const palmY = canvas.height - grassHeight - trunkHeight

  ctx.fillStyle = trunkColor
  ctx.fillRect(x, palmY, trunkWidth, trunkHeight)

  ctx.fillStyle = palmLeafColor
  ctx.beginPath()
  ctx.ellipse(x + trunkWidth + 25, palmY + 20, 50, 30, 10, 0, Math.PI * 1)
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(x, palmY + 20, 50, 30, 40, 0, Math.PI * 1)
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(x - 30, palmY, 60, 30, 47, 0, Math.PI * 1)
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(x - 15, palmY - 25, 30, 20, 35, 0, Math.PI * 1)
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(x + 20, palmY - 25, 30, 20, 27, 0, Math.PI * 1)
  ctx.fill()

  ctx.beginPath()
  ctx.ellipse(x + 50, palmY - 25, 40, 20, 28, 0, Math.PI * 1)
  ctx.fill()
}

drawGround()
drawRing(100)
drawRing(180)
drawRing(260)
drawSunflower(590)
drawTree(430)
drawTree(-15)
