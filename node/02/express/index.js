const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log('server is at port: 3000')
})

const mid1 = (req,res, next) => {
    console.log('1')
    res.write('a')
    next()
    console.log('2')
}

const mid2 = (req, res, next) => {
    console.log('3')
    next()
    res.write('b')
    res.write('d')
    res.end()
    console.log(4)
}

const mid3 = (req, res, next) => {
    console.log('5')
    next()
    res.write('c')
    console.log(6)
}

app.use(mid1)
app.use(mid2)
app.use(mid3)