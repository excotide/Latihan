const token = ~~[Math.random() * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username, callback) {
    console.log("prosesing token now...")
    setTimeout(() => {
        callback ({token, username})
    }, 200)
}

function getUser(token, callback) {
    console.log("prosesing apikey now...")
    if (token) {
        setTimeout(() => {
            callback({apiKey: "xkey1234"})
        }, 500)
    }
}

function getPictures(apiKey, callback) {
    if (apiKey) {
        setTimeout(() => {
            callback(pictures)
        }, 1500)
    }
}

login("labiq", function(response){
    const {token} = response
    getUser(token, function(response) {
        const {apiKey} = response
        getPictures(apiKey, function(response) {
            const pic = response
            console.log(pic)
        })
    })
})