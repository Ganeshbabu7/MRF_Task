// https://restcountries.com/#api-endpoints-v2-continent
// https://restcountries.com/v3.1/region/asia

// Solving problems using array functions on the rest countries' data.
//     Get all the countries from the Asia continent /region using the Filter function
//     Get all the countries with a population of less than 2 lakhs using Filter function
//     Print the following details name, capital, flag using forEach function
//     Print the total population of countries using reduce function
//     Print the country which uses US Dollars as currency.

let request = new XMLHttpRequest;
request.open('GET','https://restcountries.com/v3.1/all')
request.onload = ()=>{
    let result = JSON.parse(request.response)
    console.log(result);
    let continent = [];
    let population = [];
    let currencies = [];
    let country = [];

    let answer1 = [];
    let answer2 = [];
    let answer5 = [];

    for (i=0; i<result.length; i++){
        continent.push(result[i].continents[0]);
        population.push(result[i].population)
        currencies.push(result[i].currencies)
    }
    console.log(continent);
    console.log(population);
    console.log(currencies);
    // console.log(country);

    for (i=0; i<continent.length; i++){
        if (continent[i] === "Asia"){
            answer1.push(result[i].name.official)
        }
    }
    // console.log(answer1);

    for (i=0; i<population.length; i++){
        if (population[i] <= 200000){
            answer2.push(result[i].name.official)
        }
    }
    // console.log(answer2);

    for (i=0; i<currencies.length; i++){
        if (currencies[i] === "USD"){
            answer2.push(result[i].name.official)
        }
    }
    // console.log(answer5);
    // .map((value, index, array) => {})

    // let currency = currencies.map((array) => {console.log(array.USD)})
    // console.log(currency);

    // for (const iterator of object) {
    // }

    // for (const key in object) {
    //     if (Object.hasOwnProperty.call(object, key)) {
    //         const element = object[key];
    //     }

    // }

// _____________________________________________________________ important currency
    
    let currency = currencies.filter((e) => {return e !== undefined})
    console.log(currency);
    let dollar = []
    let d 
    d =  currency.filter((e)=>{
        dollar.push(e.USD)
        if (e === e.USD){console.log("Yes")}
    })
    console.log(dollar);
    // let final = dollar.filter((e) => { return e!== undefined})
    // console.log(final);
    // console.log(final[0].name);

// _____________________________________________________________ Just for try

    // currencies.forEach(element => {
    //     console.log(element.USD);
    // });

    // function currency (key) {
    //     for (i of key){
    //        console.log(i);
    //     }
    // }
    // currency (currencies)

// _____________________________________________________________ important currency

    // let ans = continent.filter((e)=> e === "Asia")
    // console.log(ans);

    // continent.filter((value, index, array) => {})

    // let ans = population.filter((e)=> e<=200000)
    // console.log(ans);
    
    // let ans = population.filter(popFun)
    // function popFun (population) {
    //     for (i=0; i<population.length; i++){
    //         if (population[i] <= 200000 ){
    //             return true
    //         }
    //     }
    // }
    // console.log(ans);

    // let answe = population.map((e) => {e.name})
    // console.log(answe);

    // let ans = population.filter((e)=>{
    //     for (i=0; i<e.length; i++){
    //        console.log(i);
    //     }
    // })
    // console.log(ans);

// _____________________________________________________________

    // continent.filter(filFunction)
    // function filFunction (continent) {
    //     for (i=0; i<continent.length; i++){
    //         if (continent === "Asia"){
    //             answer1.push(result[i].name.official)
    //         }
    //     }
    // }
    // console.log(answer1);

// _____________________________________________________________    

    answer1 = result.filter((e)=>e.region === "Asia")
    console.log(answer1);

    
    // let ans = []
    // answer1.forEach((element) => {
    //     if (!ans.includes(element)){
    //         ans.push(element)
    //     }
    // })
    // console.log(ans);

// _____________________________________________________________

    // population.filter(popFunction);
    // function popFunction (population){
    //     if (population === true){
    //         for (i=0; i<population.length; i++){
    //             answer2.push(result[i].name.official)
    //         }
    //     }
    // }
    // console.log(answer2);

    // continent.filter((e) => {
    //     if (e === "Asia"){
    //         for (i=0; i<continent.length; i++){
    //             answer1.push(result[i].name.official)
    //         }
    //     }
    // })

    // population.filter((e)=>{
    //     if (e <= 200000){
    //         country.push(result[0].name.official)
    //     }
    // })
    // console.log(country);

    // United States dollar
}
request.error = ()=>{
    console.log(request.status);
    console.log(request.response);
}
request.send()
// _____________________________________________________________
// _____________________________________________________________
// _____________________________________________________________

let request = new XMLHttpRequest
request.open ('GET','https://restcountries.com/v3.1/all')
request.onload = ()=>{
    let result = JSON.parse(request.response);
    console.log(result);

// Filtering Asia Countries :
    let countries = result.filter((e) => e.region === 'Asia').map((c)=> c.name.official)
    
    let countryAsia = [];
    // let country1 = countries.forEach((e) => {
    //     countryAsia.push(e.name.official)
    // })
    console.log("Countries comes under Asia region");
    console.log(countries);
    // console.log(countryAsia);

// Filtering population less than 2Lakh :
    let population = result.filter((e) => e.population<=200000)

    let countryTwoLakh = [];
    let country2 = population.forEach((e)=>{
        countryTwoLakh.push(e.name.official)
    })
    console.log("Countries having less than 2lakh population");
    console.log(countryTwoLakh);

// For Each Name, Capital & Flag :
    let countryName = [];
    let countryCapital = [];
    let countryFlag = [];

    let name = result.forEach((element) => {
        countryName.push(element.name.common);
    })
    console.log("All Country Names");
    console.log(countryName);

    let capital = result.forEach((e) => {
        countryCapital.push(e.capital)
    })
    console.log("All Country Capital Names");
    console.log(countryCapital.join(",").split(","));

    let flag = result.forEach((element) => {
        countryFlag.push(element.flags.png)
    })
    console.log("Flag link for all countries");
    console.log(countryFlag);

    // let name = result.map((e)=> e.name.official)
    // console.log("All Country Names");
    // console.log(name);

    // let capital = result.map((e)=> e.capital).filter((f) => f !== undefined)
    // console.log("All Country Capital Names");
    // console.log(capital);

//  Total Population using reduce function :
    let populationArray = [];
    let totalPopulation = result.map((e) => {
        populationArray.push(e.population);
    })

    let total = populationArray.reduce((accumulator, currentValue) =>  accumulator + currentValue, 0)

    console.log("Total Population :" , total);

// Countries using US Dollar :
    let arrayCurrency = []
    let currency = result.map((e,i)=>{
      if (e.currencies !== undefined){
        arrayCurrency.push(e.currencies)
        // arrayCurrency = Object.values(check)
        // console.log(arrayCurrency[i])
      }
      else {
        console.log(i);
      } 
    }
    

    )
    console.log(arrayCurrency);

    // let currencyArray = []
    // let currency = result.forEach((e)=>{
    //     currencyArray.push(e.currencies)
    // })
    // console.log(currencyArray);

    // let check;
    // let arrayCurrency;
    // for (let i=0; i<20; i++){
    //     if (currencyArray[i] == "undefined"){
    //         console.log(currencyArray[i])
    //     }
    //     else i++ 
    //     // check = currencyArray[i]
    //     // arrayCurrency = Object.values(check)
    //     // arrayCurrency[0].country = result[i].name.common
    // }
    // console.log(arrayCurrency);
// ___________________________________________________________________________________________________________

    // let countryCurrency = [];
    // let dollar = []

    // let currency = result.filter((e) => {return e.currencies !== undefined})

    // currency.forEach((e) => {
    //     dollar.push(e.currencies.USD)
    // })

    // let removeUndefined = dollar.filter((e)=> e!==undefined )
    // console.log(removeUndefined);

    // let country = removeUndefined.forEach((e) => {
    //     countryCurrency.push(e.name.official)
    // })
    // console.log("Countries using US Dollar");
    // console.log(countryCurrency);
};

request.error = ()=>{
    console.log(error);
};
request.send();