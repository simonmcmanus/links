var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});



const replies = (in_reply_to_status_id, tags) => {
    return tags.map(async(tag) => {
        return await client.post('statuses/update', {
            status: `related: ${tag}`,
            in_reply_to_status_id,

        })
    })
}


module.exports = async(text, tags) => {

    return await client.post('statuses/update', { status: text })
        .then(async function(tweet) {
            return await Promise.all(replies(tweet.id_str, tags))
        })
        .catch(function(error) {
            console.log(JSON.stringify(error))
            throw error;
        })
}