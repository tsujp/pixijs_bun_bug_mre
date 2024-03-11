// import { Application } from 'pixi.js'

// const app = new Application()
// const app = new PIXI.Application()
// await app.init({ width: 640, height: 360 })
// document.body.appendChild(app.canvas)

// const rect = new PIXI.Rectangle(0, 0, 100, 50)
// app.stage.addChild(rect)

import { Application } from 'pixi.js'
const app = new Application()
await app.init({ width: 640, height: 360 })
document.body.appendChild(app.canvas)
