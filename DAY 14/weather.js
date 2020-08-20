function getWeather() {
    let cityName = document.querySelector("#id1").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=e3176b52358ba32621211ec40c5b9dab&units=metric&q=" + cityName;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
        const refJson = JSON.parse(xhr.responseText);
        console.log(refJson);
        domLogic(refJson);
    }
    xhr.send();
}
let domLogic = (refJson) => {
    //console.log(refJson);
    var today = new Date();

    var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = date + ' ' + time;
    const mainM = refJson.weather[0].main;
    let parent = document.querySelector("#parent");
    const mainParent = parent.cloneNode(true);

    mainParent.children[0].innerHTML = refJson.name + " " + refJson.sys.country;
    mainParent.children[1].innerHTML = date + " " + time;
    mainParent.children[2].innerHTML = mainM;
    mainParent.children[3].children[0].innerHTML = refJson.main.temp_max;
    mainParent.children[3].children[1].children[0].innerHTML = "Humidity: " + refJson.main.humidity;
    mainParent.children[3].children[1].children[1].innerHTML = "Wind: " + refJson.wind.speed;

    parent.insertBefore(mainParent, parent);


    document.querySelector("#id1").value = "";
}