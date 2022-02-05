import axios from "axios"
import cheerio from "cheerio"
import express from "express"

const PORT = process.env.PORT || 5000
const app = express()

const URL = 'https://www.flipkart.com/limestone-day-date-original-hmts-gold-plated-adjsutable-bracelet-quartz-analog-watch-men/p/itmab07a3d563483'

axios(URL)
    .then(res => {
        const htmlData = res.data
        const $ = cheerio.load(htmlData)
        const articles = []

        $('._1YokD2, ._3Mn1Gg, .col-8-12', htmlData).each((index, element) => {
            const title = $(element).children('._1AtVbE, .col-12-12').text()
            
            articles.push({
                title
            })
        })
        console.log(articles)
    }).catch(err => console.error(err))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))