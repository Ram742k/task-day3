const API_URL = "https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    // console.log(countriesData);
    for (let ind = 0; ind < countriesData.length; ind++) {
        console.log(countriesData[ind].name.common);
        console.log(countriesData[ind].flags.png);
        
    }
    
}

const req = new XMLHttpRequest();

req.open("GET", API_URL, true);

req.onload = reqListener;

req.onerror = function () {
    console.error("Error fetching data from the API");
};

req.send();
