//Mètodos: agregar, eliminar, actualizar tareas
//Tareas deben organizarse en categorias
//Cada categoria puede tener multiples subcategorias
//Las categorias deben ser objetos que tienen arrays de subcat, y cada subcat tiene arrays de tareas


//Arreglo que almacena las tareas
let tareas=[]

//1) Creando la clase tarea para generar instancias a partir de ella
class Tarea{
    //Definiendo las propiedades de cada objeto
    constructor(nombre,estado,categoria){
        this.nombre=nombre;
        this.estado=estado;
        this.categoria=categoria;
    }
}
//2) Operaciones CRUD
//Definiendo las funciones de agregar, eliminar y actualizar tareas
let Agregar= function Agregar(nombre,estado,categoria){
        //Se agrega la tarea al arreglo
        tareas.push(new Tarea(nombre,estado,categoria));
        console.log(`¡Tarea agregada!`);
        console.log(`Hay ${tareas.length} tarea/s`);
    }

let Eliminar= function Eliminar(nombre){
    let indice=0;
    let auxiliar=[]
    //Recorriendo el arreglo en busca de la tarea a eliminar
    for (elemento of tareas){
        auxiliar.push(elemento);
        if (elemento.nombre===nombre){
            //Se elimina la tarea
            tarea_eliminada=auxiliar.pop();
            console.log(`¡Tarea ${nombre} eliminada!`)
            
        }
        
        //EL indice sigue aumentando para que las tareas restantes se añadan con normalidad
        indice+=1;
    }
    console.log("Tareas sobrantes:",auxiliar);

    //El arreglo que contiene las tareas originales será igual al arreglo auxiliar actualizado
    tareas=auxiliar;
}

let Actualizar=function Actualizar(nombre){
    //La funcion actualizar cambiara el estado de las tareas
    for (elemento of tareas){
        if (elemento.nombre===nombre){
            //Se cambia el estado
            if (elemento.estado==="completado"){
                elemento.estado="no completado";
            }
            else{
                elemento.estado="completado";
            }
        }
    }
}


//3)Iteración
let Iteracion=function Iteracion(){
    for (elemento of tareas){
        //Iterando sobre las subcategorias si existen
        if ((elemento.categoria).length>=1){
            //Se itera sobre las subcategorias
            for (subcategoria of elemento.categoria){
                console.log(`Subcategoría de la tarea ${elemento.nombre}:${subcategoria}`);
            }           
        }
        else{
            console.log(`Tareas ${elemento.categoria}`);
        }
    }
}


Agregar("Tarea1","completado",[[1,2],[3,4]]);
Agregar("Tarea2","completado",[1,2]);
Agregar("Tarea3","completado",[1,2])
//console.log(tareas[0]);
//console.log(tareas);

Eliminar("Tarea2");

Iteracion()

//T1=new Tarea("Tarea1","Completado",{sub1:[1,2]});
//console.log(T1.categoria)

