"use strict"
window.addEventListener("load", function (){
    var tituloh1 = document.querySelector(".titulo");
    var  contenido1= document.querySelector(".contenido1");
    var ocultar = document.querySelector(".ocultar");
    ocultar.style.display="none";

    let numero=5;
    console.log(numero);
    let dos=2;
    console.log(dos);
    let resta=7-5;
    console.log(resta);
    let multiplicacion= dos*5;
    console.log(multiplicacion);
    let division=25/numero;
    console.log(division);
    let ctm=resta+division*multiplicacion
    console.log(ctm);



    
    let nombre=prompt("Hola! podes indicarme tu nombre?");
    console.log(`nombre ingresado: ${nombre}`);
    let materia=prompt(`Bienvenid@ ${nombre}! ¿Cual es la materia que vamos a promediar?`);
    console.log(`materia ingresada: ${materia}`);
    let cantnotas=parseInt(prompt(`¿Cuántos exámenes de ${materia} vamos a promediar?`));
    console.log(`cantidad de notas ingresada: ${cantnotas}`);
    let tipoNotas=0;
    while(tipoNotas!=1 && tipoNotas!=2 && tipoNotas!=3 ){
        console.log("ingresaste al while  de la linea 32");
        tipoNotas=parseInt(prompt(`¿Què sistema de calificaciones se usa en ${materia}? Ingresa: \n  1 para calificaciones del 1 al 10 \n 2 para calificaciones del 1 al 100 \n 3 para calificaciones de A a F`));
        if(tipoNotas === 1){
            alert(`Haz seleccionado la escala del 1 al 10 \n Solo puedes ingresar valores ENTEROS en ese rango`);
        }
        else if (tipoNotas ===2){
            alert(`Haz seleccionado la escala del 1 al 100 \n Puedes ingresar valores con coma en ese rango`);
        }
        else{ 
            alert(`Haz seleccionado la escala del A a F \n Puedes ingresar letras mayùsculas A, B, C, D, o F seguida o no de un signo + o - \n Ejemplos B+, C, D-`);
        }
        console.log(`tipo de nota seleccionado: ${tipoNotas}`);
    }


    let suma=0;
    for (let i=1; i<=cantnotas; i++){
        console.log("ingresaste al for de la linea 49");
        let nota;
        if(tipoNotas === 1){
            nota=0;
            console.log("ingresaste al if de la linea 53");
            while(nota<1 || nota>10){
                console.log("ingresaste al while de la linea 55");
            nota=parseInt(prompt(`ingrese el valor de la ${i} nota?`)); 
            console.log(`nota ingresada: ${nota}`);
            }            
        }
        else if (tipoNotas ===2){
            nota=0;
            console.log("ingresaste al else if de la linea 62");
            while(nota<1 || nota>100){
                console.log("ingresaste al while de la linea 64");
                nota=parseFloat(prompt(`ingrese el valor de la ${i} nota?`)); 
                console.log(`nota ingresada: ${nota}`);
                }  
        }
        else{ 
            console.log("ingresaste al else de la linea 70");
            nota=prompt(`ingrese el valor de la ${i} nota?`); 
            console.log("estas ingresando al switch de la linea 76");
            switch(nota){ // FALTA ESCRIBIR TODOS LOS CASE
                case "A+":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=10;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "a+":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=10;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "A":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=10;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "a":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=10;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "A-":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=9;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "a-":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=9;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "B+":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=9;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "b+":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=9;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "B":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=8;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "b":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=8;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "B-":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=7;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "b-":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=7;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "C+":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=7;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "c+":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=7;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "C":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=6;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "c":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=6;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "C-":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=5;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "c-":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=5;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "D+":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=5;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "d+":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=5;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "D":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=4;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "d":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=4;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "D-":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=3;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "d-":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=3;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "F":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=1;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                case "f":
                    console.log(`La nota ingresada es ${nota}`);
                    nota=1;
                    console.log(`ahora la nota tiene valor ${nota}`);
                    console.log(`nota es un valor ${typeof(nota)}`);
                    break;
                default:
                    alert("Valor invalido, Tenés que empezar de nuevo");
                    //nota=prompt(`El valor ingresado no es valido, ingrese el valor de la ${i} nota?`); no sirve
                    break;

            }
            console.log(`saliste del swich. Nota ingresada: ${nota}`);
            console.log(typeof(nota));
        }        
        console.log(`saliste del if. Nota ingresada: ${nota}`);
        console.log(`la suma hasta ahora era: ${suma}`);
        suma= suma+nota;
        console.log(`la suma ahora es: ${suma}`);
        console.log(`la suma hasta ahora era: ${typeof(suma)}`);
    }
    console.log(`el resultado es ${suma}`);
    let promedio = suma/cantnotas
    if (tipoNotas===3){
        promedio=parseInt(promedio);
        switch(promedio){
            case 1:
                promedio="F"   
                break;    
            case 2:
                promedio="F"
                break;
            case 3:
                promedio="D-"
                break;
            case 4:
                promedio="D"
                break;
            case 5:
                promedio="D+"
                break;
            case 6:
                promedio="C"
                break;
            case 7:
                promedio="C+"
                break;
            case 8:
                promedio="B"
                break;
            case 9:
                promedio="B+"
                break;
            case 10:
                promedio="A"
                break;
        }
        alert(`El promedio de ${nombre} en ${materia} es ${promedio}`  );

    }
    else {
        alert(`El promedio de ${nombre} en ${materia} es ${promedio}`);
    }


}) // fin del Load