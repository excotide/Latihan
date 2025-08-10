const token = ~~[Math.random() * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log("prosesing token now...")
    return new Promise((succes, failed) => {
        setTimeout(() => {
            if (username === "labiq") {
                succes({token, username})
            } else {
                failed("sorry username wrong!")
            }
        }, 200)
    })
}

function getUser(token) {
    console.log("prosesing apikey now...")
    return new Promise((succes, failed) => {
        setTimeout(() => {
            if (token) {
                succes({apiKey: "xkey1234"})
            } else {
                failed("sorry, no token cannot acces")
            }
        }, 500)
    })
}

function getPictures(apiKey) {
    return new Promise((succes, failed) => {
        setTimeout(() => {
            if (apiKey) {
                succes(pic = pictures)
            } else {
                failed("sorry no apiKey!")
            }
        }, 1500)
    })
}

login("labiq").then(function (response) {
    const {token} = (response)
    getUser(token).then(function(response) {
        const { apiKey } = response
        getPictures(apiKey).then(function() {
            console.log(pic)
        }).catch(err => console(err))
    }).catch(err => console.log(err))
}).catch(err => console.log(err))