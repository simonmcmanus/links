const AWS = require("aws-sdk")

exports.handler = async(event, context) => {


    const s3 = new AWS.S3({
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    })

    try {

        const body = JSON.parse(event.body)



        console.log(body.text)

        var params = {
            Key: "links.json",
            Bucket: 'netlify-files',
        }
        const s3Objects = await s3.getObject(params).promise();

        const links = JSON.parse(s3Objects.Body.toString('utf-8'))

        links.forEach(function(link) {
            var prepped = link.tags.split(',')
            allTags = allTags.concat(prepped)

        })
        var keyed = {};
        allTags.forEach(function(tag) {
            keyed[tag] = true;
        })

        var uniqueTags = Object.keys(keyed).map(function(tag) {
            return {
                value: tag
            }
        })

        return { statusCode: 200, body: uniqueTags }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}