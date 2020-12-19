const AWS = require("aws-sdk")

// This function reads the contents of `name-of-your-file.json` from an
// AWS S3 bucket and returns the contents.
exports.handler = async(event, context) => {
    const s3 = new AWS.S3({
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
    })

    try {
        const result = await s3.getObject({
            // The bucket name
            Bucket: "smm_links",
            // The key/name of your file
            Key: `links.json`,
        })
        console.log(result.Body.toString('utf-8'))



        return {
            statusCode: 200,

            body: JSON.stringify(result.body),
        }
    } catch (e) {
        return { statusCode: 500, body: e.message }
    }
}