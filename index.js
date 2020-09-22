import Express from "express"
import Info from './info.js'

const app = Express()
const port = 3000

app.get('/', (req, res) => {
  res.json(Info)
  console.log(Info)
})

app.listen(port, () => console.log("listening on port : " + port))