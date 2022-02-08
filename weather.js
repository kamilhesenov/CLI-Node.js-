#!/usr/bin/env node
import {getArgs} from "./helpers/args.js";
import {printHelp} from "./services/log.service.js";


const initCLI = () => {
    const args = getArgs(process.argv);
    if(args.h){
        // Вывод help
        printHelp();
    }
    if(args.s){
        // Сохранить город
    }
    if(args.t){
        // Сохранить token
    }
        // Вывести погоду
}

initCLI();
