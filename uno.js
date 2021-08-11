function mostrar() {

  let nombre; //entre 3 y 6 caracteres 
  let tipo; // mamifero, ave, reptil
  let sangre; // caliente o fria 
  let edad; // >0
  let sexo // m macho , h hembra
  let respuesta;
  let promEdadRep=0;
  let acumEdadRep=0
  let contRep=0;
  let tipoMasJov;
  let sexoMasJov;
  let edadMasJov;
  let flagMasJov=1
  let contAve=0;
  let contMascotas =0;
  let procentAves=0
  let contmamifero=0;
  let maxCantMascotas;




  do{

    nombre=prompt("ingrese nombre ");
    while(nombre.length < 3 || nombre.length > 8){
       nombre=prompt("nombre fuera de rango. ingrese nombre ");
    }

    tipo=prompt("ingrese tipo: mamifero / ave / reptil").toLowerCase();
    while(!(tipo=="mamifero" || tipo =="ave" || tipo== "reptil" )){
      tipo=prompt("error. ingrese tipo: mamifero / ave / reptil").toLowerCase();
    }

    if(tipo=="reptil"){
      sangre= "fria";

    }else{
      sangre=prompt("ingrese sangre: fria o caliente").toLowerCase();
      while(!(sangre == "fria" || sangre == "caliente")){
        sangre=prompt("error. ingrese sangre: fria o caliente").toLowerCase();
      }
    }

    edad=parseInt(prompt("ingrese edad: "));
    while(isNaN(edad)|| edad < 0){
      edad=parseInt(prompt("error. ingrese edad")); 
    }

    sexo= prompt("ingrese sexo: m / h").toLowerCase();
    while(sexo!="m" && sexo!= "h"){
      sexo= prompt("error. ingrese sexo: m / h").toLowerCase();
    }

    if(tipo=="reptil"){
      contRep++;
      acumEdadRep += edad;


    }else if(tipo=="ave"){
      contAve++;


    }else{// tipo = mamifero
      contmamifero++;

    }

    contMascotas++;


    if(flagMasJov || edad < edadMasJov){ //B
      edadMasJov= edad;
      tipoMasJov=tipo;
      sexoMasJov= sexo;
      flagMasJov =0;
    }  


    respuesta=prompt("desea ingresar mas animales: s / n" );
  }while(respuesta =="s")


  ////////////////////////////////////////////

  if(contRep!=0){ //A
    promEdadRep = acumEdadRep / contRep;
  }


  if(contAve!=0){// C
    procentAves = contMascotas *100 / contAve
  }

  if(contAve > contRep && contAve > contmamifero){
    maxCantMascotas = "Aves"

  }else if(contRep >= contAve && contRep > contmamifero){
    maxCantMascotas = "Reptiles";

  }else{
    maxCantMascotas = "mamiferos";
  }

 //////////////////////////////////////////////////////
 document.write("A) promedio de edad de los reptiles es: " + promEdadRep + "<br>");
 document.write("B) La mascota mas joven es de tipo " + tipoMasJov + " y tiene el sexo "+ sexoMasJov + "<br>");
 document.write("C) el procentaje de aves es: " + procentAves +"<br>");
 document.write("D) la mayor cantidad de mascotas son: " + maxCantMascotas + "<br>" )



}
