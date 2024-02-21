let p = fetch('https://api.openweathermap.org/data/2.5/weather?q=${delhi}&appid=${8652aa0bac16420206c6238818714c67}')
p.then((value1) => {
    return value1.json()
}).then((value2) =>{
    console.log(value2)
})
