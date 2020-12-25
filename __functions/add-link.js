const AWS = require("aws-sdk")

const tweet = require('./tweet')
const build = require('./build')

exports.handler = async(event, context) => {


    if (event.headers['x-api-key'] !== process.env.API_KEY) {
        return { statusCode: 404 }
    }

    const s3 = new AWS.S3({
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    })

    try {

        const body = JSON.parse(event.body)


        if (body.url === '') {
            return { statusCode: 400, body: 'no-url' }
        }

        const input = {
            created: new Date(),
            url: body.url,
            title: body.title,
            summary: body.summary,
            tags: body.tags
        }

        var params = {
            Key: "links.json",
            Bucket: 'netlify-files',
        }
        const s3Objects = await s3.getObject(params).promise();

        const links = JSON.parse(s3Objects.Body.toString('utf-8'))
        links.push(input)

        const updated = await s3.putObject({
            Bucket: params.Bucket,
            Key: params.Key,
            Body: JSON.stringify(links, null, 4)
        }).promise()

        await build()
        if (body.tweet === 'tweet') {

            const items = body.tags.split(',').map((item) => {

                return `https://simonmcmanus.com/tags/${item.toLowerCase()}/index.html`

            }).join(' ')

            await tweet(input.url, items)



        }
        return { statusCode: 200, body: 'done' }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}