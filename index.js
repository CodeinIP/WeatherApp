function getData(){
    let city = document.getElementById("city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c5f137129bd69ee7422f91ded5ccebb`
    fetch(url).then(function(res){
        // console.log(res.json())
        return res.json();
    }).then(function(res){
        console.log(res);
        localStorage.setItem("lat",JSON.stringify(res.coord.lat));
        localStorage.setItem("long",JSON.stringify(res.coord.lon));
        displayData(res);
    })
}


function displayData(data){
    document.getElementById("container").innerHTML = null;
    let container = document.getElementById("container");
    let box = document.createElement("div");
    box.setAttribute("class","box")
    container.append(box);
    
    let imgbox = document.createElement("div");
    imgbox.setAttribute("class","imgbox");
    let img = document.createElement("img");
    imgbox.append(img);
    if(data.weather[0].main=="Clouds"){
        img.src = "https://i.pinimg.com/originals/bf/07/9a/bf079ad6be48e4ea743263e0a2d7b682.jpg"
    }
    if(data.weather[0].main=="Clear"){
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkd3PCwZ4TMvQiAMKYltpNflspLIod1S6QQ&usqp=CAU"
    }
    if(data.weather[0].main=="Haze"){
        img.src = "data:image/png;base64,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"
    }
    
    let city = document.createElement("p");
    city.innerText = `Place:- ${data.name}`;
    // box.append(city)
    let temp = document.createElement("p");
    temp.innerText = `Temperature:- ${Math.round(data.main.temp-273)} Deg.`
    // box.append(city,temp)

    let humidity = document.createElement("p");
    humidity.innerText = `Humidity:- ${data.main.humidity}%`;
    box.append(imgbox,city,temp,humidity)

    let map = document.getElementById("gmap_canvas");
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

function getWeather(){
    
    navigator.geolocation.getCurrentPosition(success);
    function success(pos){
        let crd = pos.coords;
        
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getDataLocation(crd.latitude,crd.longitude);
    }
    
}
function getDataLocation(lat,long){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2c5f137129bd69ee7422f91ded5ccebb`;

    
    fetch(url)
    .then(function(res){
        return res.json();
        // console.log(res)
    })
    .then(function(res){
        console.log(res);
        localStorage.setItem("lat",JSON.stringify(res.coord.lat));
        localStorage.setItem("long",JSON.stringify(res.coord.lon));
        displayData(res);
    })
    .catch(function(err){
        console.log(err);
    })

}
function display_realtime(){
    setInterval(() => {
        display_time();
    }, 1000);
}
function display_time(){
    var x = new Date();
    document.getElementById("time").innerHTML = x;
}

// api.openweathermap.org/data/2.5/forecast?lat=31.1048145&lon=77.1734033&appid=2c5f137129bd69ee7422f91ded5ccebb