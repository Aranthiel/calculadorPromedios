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
    let materia=prompt(`Bienvenid@ ${nombre}! ¿Cual es la materia que vamos a promediar?`);
    let cantnotas=parseInt(prompt(`¿Cuántos exámenes de ${materia} vamos a promediar?`));
    console.log(cantnotas);
    let tipoNotas=0;
    while(tipoNotas!=1 && tipoNotas!=2 && tipoNotas!=3 ){
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
    }


    let suma=0;
    for (let i=1; i<=cantnotas; i++){
        let nota=0;
        if(tipoNotas === 1){
            while(nota<1 || nota>10){
            nota=parseInt(prompt(`ingrese el valor de la ${i} nota?`)); 
            }            
        }
        else if (tipoNotas ===2){
            while(nota<1 || nota>100){
                nota=parseInt(prompt(`ingrese el valor de la ${i} nota?`)); 
                }  
        }
        else{ 
            nota=prompt(`ingrese el valor de la ${i} nota?`); 
            switch(nota){
                case "A+":
                    nota=10;
                case "A":
                    nota=10;
                case "A-":
                    nota=9;
                case "B+":
                    nota=9;
                case "B":
                    nota=8;
                case "B-":
                    nota=7;
                case "C+":
                    nota=7;
                case "C":
                    nota=6;
                case "C-":
                    nota=5;
                case "D+":
                    nota=5;
                case "D":
                    nota=4;
                case "D-":
                   nota=3;
                case "F":
                    nota=1;
                default: 
                    alert ("el valor ingresado no está dentro de la tabla")
                    nota=prompt(`ingrese el valor de la ${i} nota?`); 
            }
        }        
        console.log(nota)
        suma= suma+nota;
        console.log(suma)
    }
    console.log(`el resultado es ${suma}`);
    let promedio = suma/cantnotas
    alert(`El promedio de ${nombre} en ${materia} es ${promedio}`)


}) // fin del Load