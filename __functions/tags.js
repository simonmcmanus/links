const AWS = require("aws-sdk")

const { searchTags } = require('../lib/get-tags.js')


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
        let searchTerm = '';
        if (event.headers && event.headers.search) {
            searchTerm = event.headers.search.toLowerCase()
        }

        const s3Objects = await s3.getObject(params).promise();

        const tags = JSON.parse(s3Objects.Body.toString('utf-8'))
            //console.log(tags)
        const uniqueTags = searchTags(tags, searchTerm)
        console.log('ut', searchTerm)

        return {
            statusCode: 200,
            body: JSON.stringify(
                uniqueTags
            ),
            headers: {
                'Content-Type': 'application/json',
            },
        }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}