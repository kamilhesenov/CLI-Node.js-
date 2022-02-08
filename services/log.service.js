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

export { printError, printSuccess, printHelp };
