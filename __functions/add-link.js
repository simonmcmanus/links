const AWS = require("aws-sdk")

const tweet = require('./tweet')
const build = require('./build')

exports.handler = async(event, context) => {




    const s3 = new AWS.S3({
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    })

    try {

        const body = JSON.parse(event.body)
        const headers = JSON.parse(event.headers)


        console.log(headers)
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
        if (body.tweet === 'tweet') {
            await tweet(input.url + ' more links at https://simonmcmanus.com/links.html')

        }
        await build()
        return { statusCode: 200, body: 'done' }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}