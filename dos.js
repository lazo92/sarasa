function mostrar() {

  let carrera;
  let sexo;
  let cantidadMaterias // 1 - 5 
  let notaPromedio; // 0 - 10
  let edad; //Se debe informar de existir, o informar que no existe , en el caso que corresponda.
  //A
  let nombreMjFisica;
  let mejorpromFisica;
  let flagMjFis=1
  //B
  let nomAlumMasjov;
  let EdadAlumMasJov;
  let flagJov=1
  //C 
  let contquimica=0;
  let contFisica=0;
  let contSistemas=0;
  let porcQuimica=0;
  let porcFisica=0;
  let porcSistemas=0;
  //D
  let edadMasMaterias;
  let nombreMasMaterias;
  let masMaterias;
  let flagMaterias =1;



   //500
  for(let i=0;i < 2; i++){

    nombre=prompt("ingrese nombre");

   carrera=prompt("ingrese carrera: quimica / fisica / sistemas").toLowerCase();
    while(! (carrera=="quimica" || carrera =="fisica" || carrera== "sistemas" )){
     carrera=prompt("error. ingrese carrera: quimica / fisica / sistemas").toLowerCase();
    }

    sexo=prompt("ingrese sexo: masculino / femenino / no binario").toLowerCase();
    while(! (sexo=="masculino" || sexo =="femenino" || sexo== "no binario" )){
     sexo=prompt("error. ingrese sexo: masculino / femenino / no binario").toLowerCase();
    }


    cantidadMaterias=parseInt(prompt("ingrese cantidad de  materias de 1 a 5: "));
    while(!(cantidadMaterias>= 1 && cantidadMaterias <= 5)){
      cantidadMaterias=parseInt(prompt("fuera de rango. ingrese materias de 1 a 5:"));
    }


    nota=parseInt(prompt("ingrese nota: "));
    while(!(nota>=0 && nota<=10)){
      nota=parseInt(prompt("error. ingrese nota"));
    }


    edad=parseInt(prompt("ingrese edad: "));
    while(isNaN(edad)|| edad < 1){
      alert("edad no existente")
      edad=parseInt(prompt("error. ingrese edad"));
    }alert("edad existente")



    if(carrera=="fisica"){ // A

      contFisica++;

      if(flagMjFis || notaPromedio > mejorpromFisica){
        mejorpromFisica = notaPromedio;
        nombreMjFisica = nombre
        flagMjFis=0;
      }



    }else if(carrera == "quimica"){
      contquimica++;


    }else{

      contSistemas++;

    }



    if(sexo=="femenino"){ //B
      if( flagJov|| edad < EdadAlumMasJov){
        EdadAlumMasJov= edad;
        nomAlumMasjov =nombre;
        flagJov=0;
      }
    }


    if (!( carrera== "quimica")){
      if(flagMaterias || cantidadMaterias > masMaterias){
        masMaterias = cantidadMaterias;
        edadMasMaterias = edad;
        nombreMasMaterias = nombre;
        flagMaterias=0;


      }
    }


  }// fin de for


  //c
  porcQuimica= contquimica / .2;
  porcFisica = contFisica / .2;
  porcSistemas= contSistemas / .2;
 

  //////////////////////////////
  document.write("A) Nombre mejor promedio: " + nombreMjFisica+ "<br>");
  document.write("B) el nombre de la alumna mas joven es: " + nomAlumMasjov+ "<br>");
  document.write("C) el porcentaje de estudiantes  en cada materia es: quimica = "+ porcQuimica + " fisica = " + porcFisica + " Sistemas = " + porcSistemas + "<br>");
  document.write("D) el estudiante con mas materias cursadas es: " + nombreMasMaterias + " y tiene " + edadMasMaterias + " años <br>");
 




  








}
