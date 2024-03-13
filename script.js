// functii simple

function printDigits() {
    for (let i = 0; i <= 9; i++) {
        console.log('digit: ', i);
    }
}

printDigits();
printDigits();
printDigits();

// functii cu parametri 
function arrayHasElement(arrayToCheck, element)                   //verificam daca un array are un element
{
    let found=false;
    for (const element1 of arrayToCheck)
    { if (element1 === element)
            {   
            found=true;
            break;  
            }
    }

    if(found)
    {console.log(`Array ${arrayToCheck} has element ${element}`);
        }  else {
            console.log(`Array ${arrayToCheck} does not has element ${element}`);
        }
}
const array1 = [1,2,3,4,5];
const array2 = [3, 20, 21];
const valueToCheck1 = 10;
const valueToCheck2 = 30;
arrayHasElement(array1, valueToCheck1);
arrayHasElement(array2, valueToCheck1);
arrayHasElement(array1,valueToCheck2);
arrayHasElement(['ala', 'bala', 'portocala'], 'ala');          //alta forma de scriere, nu trebuie intotdeauna ca parametrii sa fie variabile


//functie cu paramtri si return
 function removeEvenNumber(arrayToModify)
 {  const newArray=[];

    for (const num of arrayToModify)
    {
        if(num%2>0)
            {newArray.push(num);  }
    }

    return newArray;
}

const arrayModified = removeEvenNumber(array1);
console.log(`Modified array1 is ${arrayModified}`);

const arrayModified2 = removeEvenNumber(array2);
console.log(`Modified array2 is ${arrayModified2}`);