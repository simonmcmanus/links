var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});



const tweet = async(text) => {
    return await client.post('statuses/update', { status: text })
        .then(function(tweet) {
            console.log(tweet);
        })
        .catch(function(error) {
            console.log(JSON.stringify(error))
            throw error;
        })
}

exports = { tweet }