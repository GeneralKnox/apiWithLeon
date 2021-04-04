const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': "London, England"
    },
    'chance the rapper': {
        'age': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': "London, England"
    },
    'common': {
        'age': 28,
        'birthName': 'Lonnie Corant Jaman Shuka Rashid Lynn',
        'birthLocation': "Chicago, Illinois"
    },
    'eminem': {
        'age': 48,
        'birthName': 'Marshall Mathers',
        'birthLocation': "Saint Joseph, Missouri"
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['eminem'])
    }
})

app.delete('/deleteRapper', (request, response) => {
    db.collection('rappers').deleteOne({stageName: request.body.stageNameS})
    .then(result => {
        console.log('Rapper Deleted')
        response.json('Rapper Deleted')
    })
    .catch(error => console.error(error))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})