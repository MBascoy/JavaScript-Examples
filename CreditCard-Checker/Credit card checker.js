// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



console.log(findInvalidCards(batch));

console.log(idInvalidCardCompanies(findInvalidCards(batch)));


//Funcion para validar de cuales son las compañias con numeros invalidos

function idInvalidCardCompanies(cardInvalid){
  
  /*Utilizamos estas variables como indicadores
  para mostrar si la compañia tiene numeros invalidos solo una vez.*/
  var amex=0;
  var visa=0;
  var mastercard=0;
  var discover=0;

  invalidList=[];

  /*Recorremos todos los numeros de tarjeta invalidos y 
  comprobamos la compañia segun el primer digito del numero*/
  for(let i=0; i<cardInvalid.length; i++){
    if(cardInvalid[i][0]==3){
      if(amex==0){
        invalidList.push("Amex");
        amex=1;
      }
    }
    else if(cardInvalid[i][0]==4){
      if(visa==0){
        invalidList.push("Visa");
        visa=1;
      }
    }
    else if(cardInvalid[i][0]==5){
      if(mastercard==0){
        invalidList.push("Mastercard");
        mastercard=1;
      }
    }
    else if(cardInvalid[i][0]==6){
      if(discover==0){
        invalidList.push("Discover");
        discover=1;
      }
    }
  }
  return(invalidList);
}


function findInvalidCards(cards){
  var invalid=[];
  for (let i=0; i < cards.length; i++){
    if(validateCred(cards[i]) == false)
      invalid.push(cards[i]);
  }
  return(invalid);
}


function validateCred(numbers){
  var suma=0;
  var par=1;
  for(let j=numbers.length-1; j >= 0 ; j--) //Recorremos todos los numeros de la tarjeta que se nos pasa
  {
    if (par==0){
      let sumaTemporal=0;

      sumaTemporal=numbers[j]*2; //utilizamos sumaTemporal para almacenar los numeros pares que deben de ser multiplicados por dos
      if(sumaTemporal>9) //Si al multiplicar por dos el numero es mayor de 9 le restamos 9 para que sea vuelva a estar dentro del valor 0-9
        sumaTemporal-=9;

      suma+=sumaTemporal;

      par=1;
    }
    else{
      suma += numbers[j];
      par=0;
    }
  }
  if(suma%10 == 0)
    return true;
  else
    return false;
}
  









