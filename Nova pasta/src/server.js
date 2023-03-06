import app from './app.js'

const port = 3000

import './infra/contents.js'

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}/`)
})