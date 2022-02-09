import dedent from "dedent-js";

const printError = (error) => {
    console.log(" ERROR " + " " + error)
}

const printSuccess = (message) => {
    console.log(" SUCCESS " + " " + message);
}

const printHelp = ()=>{
    console.log(
        dedent(
            ` HELP 
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохронения токена`
        )
    );
}

const printWeather = (response, icon)=>{
    console.log(
        dedent(
            ` WEATHER - Погода в городе ${response.name} 
        ${icon}  ${response.weather[0].description}
        Температура: ${response.main.temp} (ощущаетьс как ${response.main.feels_like})
        Влажность: ${response.main.humidity}%
        Скорость ветра: ${response.wind.speed}
        `
        )
    );
}

export { printError, printSuccess, printHelp, printWeather };
