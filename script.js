let request = new XMLHttpRequest
request.open ('GET','https://restcountries.com/v3.1/all')
request.onload = ()=>{
    let result = JSON.parse(request.response);
    console.log(result);

// Filter Asia Countries :
    let countries = result.filter((e) => e.region === 'Asia').map((c)=> c.name.official)
    console.log("Countries comes under Asia region");
    console.log(countries);

// Filter population less than 2Lakh :
    let population = result.filter((e) => e.population<=200000).map((c)=>c.name.official)
    console.log("Countries having less than 2lakh population");
    console.log(population);

// Using For Each Name, Capital & Flag :
    let countryName = [];
    result.forEach((element) => {
        countryName.push(element.name.common);
    })
    console.log("All Country Names");
    console.log(countryName);

    let countryCapital = [];
    result.forEach((e) => {
        countryCapital.push(e.capital)
    })
    console.log("All Country Capital Names");
    console.log(countryCapital.join(",").split(","));

    let countryFlag = [];
    result.forEach((element) => {
        countryFlag.push(element.flags.png)
    })
    console.log("Flag link for all countries");
    console.log(countryFlag);

//  Total Population using reduce function :
    let populationArray = [];
    let totalPopulation = result.map((e) => {
        populationArray.push(e.population);
    })

    let total = populationArray.reduce((accumulator, currentValue) =>  accumulator + currentValue, 0)

    console.log("Total Population :" , total);

// Countries using US Dollar :
    let answer = [];
    let usDollar = result.filter((e) => e.currencies !== undefined)
                   .map((c) => c = Object.values(c.currencies))
                   .filter((d) => d[0].name === 'United States dollar')

    usDollar.forEach((e,i) => {
        e[0].country = result[i].name.official
    })
    
    for (let i=0; i<usDollar.length; i++){
        answer.push(usDollar[i][0].country);
    }

    console.log("Countries using US Dollar");
    console.log(answer);
};

request.error = ()=>{
    console.log(error);
};
request.send();