//MEdia, mediana, moda, ds
function Operaciones(numeros,operacion){
    if (operacion==="media"){
        let suma=0;
        for (numero of numeros){
            suma+=numero;
        }
        console.log(`La media es ${suma/numeros.length}`);

    };
    
    if (operacion==="mediana"){
        //Se ordena los numeros en orden creciente
        let ord=numeros.sort((a,b)=> a-b)
        //console.log(ord.length/2)
        if ((ord.length/2)!==0){
            console.log(`La mediana es ${ord[Math.floor(ord.length/2)]}`)
        }
        else{
            console.log("Par")
            let num1=ord[(ord.length/2)];
            console.log(num1)
            let num2=ord[(ord.length/2)-1];
            console.log(`La mediana es ${(num1+num)/2}`);
        }
    }

    if (operacion==="moda"){
        pass //Math.
    }

    if (operacion==="ds"){
      pass //Math.
    }

}
let ar=[1,2,3,4]
Operaciones(ar,"media")
Operaciones(ar,"mediana");
//const a=12;
//console.log(typeof(a));