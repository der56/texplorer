import express from 'express'
import { fileURLToPath } from 'url'
import { router as controller } from './utils/controller.js'
import path from 'path'

const app = express()
app.use(express.json());
app.use(express.text());

const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)
app.use('/', express.static(__dirname + '/view'))
app.use('/controller', controller)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`app listening on ${port}`))