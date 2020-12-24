const AWS = require("aws-sdk")

exports.handler = async(event, context) => {


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
        let allTags = []
        links.forEach(function(link) {
            var prepped = link.tags.split(',')
            allTags = allTags.concat(prepped)

        })
        var keyed = {};
        allTags.forEach(function(tag) {
            keyed[tag] = true;
        })

        var uniqueTags = Object.keys(keyed).map((tag) => tag)
        console.log('->', uniqueTags)
        return { statusCode: 200, body: JSON.stringify(uniqueTags) }

    } catch (e) {
        console.log(e)
        return { statusCode: 500, body: e.message }
    }
}