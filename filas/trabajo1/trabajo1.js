function ColaFila(){
    this.elementos = [];
    this.primero = 0;
    this.final = 0;

  
  this.encolar = function(){
 
      this.elementos[this.final] = this.encolar_autom();
     
      this.final++;
     
 
  }



this.encolar1 =function(inf){
    this.elementos[this.final] = inf;
   
    this.final++;

}


  this.encolar_autom=function(){
      cantidad=parseInt(prompt("Ingrese la cantidad de la cola"))
      for(i=0;i<=cantidad; i++){
          //this.elementos[0+i]=i;
          this.encolar(i);
      }
      //this.final++;

  }

  this.recorrer=function(){
    for(i=0;i<=this.elementos.length; i++){
        if(this.elementos[0]%2==0 && this.elementos[1]%2==1&&this.elementos[2]%2==0&&this.elementos[3]%2==1){
            res=i;
            console.log(true);
        }else{
            console.log(false);
        }
    }
  }

  this.sumar=function(){
      let sum=0;
      for(i=0;i<=this.elementos.length; i++){
        if(this.elementos[i]>=0&&this.elementos[i]<=9){

            suma+=this.elementos[i];
        }
      }

      alert (suma);
   
  }

  this.array_pares=function(){
      pares=[];
      for(i=0;i<=this.elementos.length; i++){
          if(this.elementos[i]%2==0){
              pares[0+i]=i
          }
      }

      console.log(pares)
  }

  this.array_inpares=function(){
    impares=[];
    for(i=0;i<=this.elementos.length; i++){
        if(this.elementos[i]%2==1){
            impares[0+i]=i
        }
    }

    console.log(impares)
}

this.cadena_string=function(){
    cadena=[];
    for(i=0;i<=this.elementos.length;i++){
        if(this.elementos[i].typeof=="string"){
            cadena.push(this.elementos[i])
        }
    }
    console.log(cadena)
 }

 this.tamaño_cola=function(){
 return this.final - this.primero;
 }

 this.contadordatos=function(){
   cont1=0;
   cont2=0;
   cont3=0;
   for(i=0;i<=this.elementos.length;i++){
       if(this.elementos[i].typeof=="string"){
          cont1=i;
       }else if(this.elementos[i].typeof==Number){
         cont2=i;
       }else if(this.elementos[i].typeof==Array){
         cont3=i;
       }
   }

 }

 this.eliminar=function(){
     nombre=prompt("Ingrese el valor a buscar");
      for(i=0;i<this.elementos.length;i++){
          if(this.elementos[i]==nombre){
              this.elementos.splice(i);
          }else{
            alert("El elemento no existe")
          }
      }


 }

 eliminar2=function(){
    nombre=prompt("Ingrese la posicion2");
     for(i=0;i<this.elementos.length;i++){
         if(this.elementos[i]==nombre){
             this.elementos.splice(i);
         }else{
           alert("El elemento no existe")
         }
     }
 
  }



}


