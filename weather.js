#!/usr/bin/env node
import {getArgs} from "./helpers/args.js";
import {printHelp, printSuccess, printError, printWeather} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather, getIcon} from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("Не передан токен");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        return printSuccess("Токен сохранень");
    } catch (err) {
        return printError(err.message);
    }
}

const saveCity = async (city)=>{
    if(!city.length){
        printError("Не передан город!");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        return printSuccess("Город сохранень");
    }
    catch (err){
        return printError(err.message);
    }
}

const getForCast = async () => {
    try {
        const weather = await getWeather("moscow");
        printWeather(weather,getIcon(weather.weather[0].icon));
    } catch (e) {
        console.log(e.message);
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        // Вывод help
       return  printHelp();
    }
    if (args.s) {
        // Сохранить город
       return  saveCity(args.s);
    }
    if (args.t) {
        // Сохранить token
        return saveToken(args.t);
    }
    // Вывести погоду
    return  getForCast();
}

initCLI();
