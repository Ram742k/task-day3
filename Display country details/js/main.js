const API_URL = "https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData = JSON.parse(this.responseText);
    
    for (let ind = 0; ind < countriesData.length; ind++) {
        const country = countriesData[ind];
        console.log(`Name: ${country.name.common}`);
        console.log(`Region: ${country.region}`);
        console.log(`Sub-region: ${country.subregion}`);
        console.log(`Population: ${country.population}`);
        console.log('________________________________________________');
    }
}

const req = new XMLHttpRequest();

req.open("GET", API_URL, true);

req.onload = reqListener;

req.onerror = function () {
    console.error("Error fetching data from the API");
};

req.send();
