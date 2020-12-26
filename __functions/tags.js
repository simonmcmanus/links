const AWS = require("aws-sdk")

const { extractUniqueTags } = require('../lib/get-tags.js')


exports.handler = async(event, context) => {


    const s3 = new AWS.S3({
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    })

    try {
        var params = {
            Key: "tags.json",
            Bucket: 'netlify-files',
        }
        const searchTerm = event.headers.search.toLowerCase()
        const s3Objects = await s3.getObject(params).promise();

        const tags = JSON.parse(s3Objects.Body.toString('utf-8'))
        const uniqueTags = extractUniqueTags(tags, searchTerm)

        console.log('->', uniqueTags)
        return {
            statusCode: 200,
            body: JSON.stringify(uniqueTags),
            headers: {
                'Content-Type': 'application/json',
            },
        }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}