const AWS = require("aws-sdk")

const tweet = require('./tweet')
const build = require('./build')

exports.handler = async(event, context) => {

    const body = JSON.parse(event.body)

    const input = {
        create: new Date(),
        url: body.url,
        title: body.title,
        summary: body.summary,
        tags: body.tags
    }

    const s3 = new AWS.S3({
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    })

    try {
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
        await tweet(input.url)
        await build()


    } catch (e) {
        console.log(e)
            //return { statusCode: 500, body: e.message }
    }
}