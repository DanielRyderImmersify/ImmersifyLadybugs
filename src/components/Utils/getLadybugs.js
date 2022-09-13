
export function GetLadybugs (gotDataCallback, errorCallback) {

    var myHeaders = new Headers();

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    fetch(process.env.REACT_APP_API_URL + "/getLadybugs", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            gotDataCallback(JSON.parse(result))
        })
        .catch((error) => {
            console.log("error", error)
            errorCallback(error)
        });
}