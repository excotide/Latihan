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

async function UserDisplay() {
    const {token, username} = await login("labiq")
    const {apiKey} = await getUser(token)
    const pic = await getPictures(apiKey)

    console.log("________________________________")
    console.log(`login berhasil, selamat datang ${username}`)
    console.log(`token anda adalah ${token}`)
    console.log(`apiKey anda adalah ${apiKey}`)
    console.log(pic)
}

UserDisplay()