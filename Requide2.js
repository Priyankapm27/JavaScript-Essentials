const data = new Promise((resolve, reject) => {
    var name = "Yashpal"

    if (name == "Yashpalg") {
        resolve("Successful")
    }
    else {
        reject("Not successful")
    }
});
data
    .then((message) => {
        console.log("successful", message)
    })
    .catch((message) => {
        console.log("Unsuccessful", message)
    })
    .finally((message) => {
        console.log("Done")
    })

const axios = require("axios")

const data1 = axios.get("https://google.com/")

data1
    .then((message) => {
        console.log(message)
    })
    .catch((message) => {
        console.log(message)
    })
    .finally((message) => {
        console.log(message)
    })

const fetchData = async () => {
    try {
        const data2 = await axios.get("https:/google.com/")
        console.log(data2)
    }
    catch (err) {
        console.log(err)
    }
    finally {
        console.log("No error caught")
    }
};
fetchData();
