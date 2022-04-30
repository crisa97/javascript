function PilaStack(){

      this.elementos = [];
    
    this.insertar = function(elemento){
      this.elementos.push(elemento);
    }
    
    this.extraer = function(){
      const ultimo = this.elementos[this.elementos.length - 1];
      this.elementos.pop();
      return ultimo;
    };

    this.longitud = function(){
      return this.elementos.length;
    }
    this.ver_proximo = function(){
      return this.elementos[this.elementos.length - 1];
    }
    this.ver_elementos = function(){
      return this.elementos;
    }
    this.vacia = function(){
        if(this.elementos.length == 0){
            return true;
        }else{
            return false;
        }
    }
    this.vaciarFila = function(){
        while(!this.vacia()){
            this.extraer();
        }
    }
  }
  
  const pila = new PilaStack();
  
  pila.insertar({url:'yuli'});
  pila.insertar({url:'camila'});
  pila.insertar({url:'luisa'});
  pila.insertar({url:'edwuin'});
  pila.insertar({url:'juli'});
  console.log(pila.ver_elementos())
  const longitud = pila.longitud();
  pila.extraer();
  pila.extraer();
  pila.extraer();
  
  console.log(longitud)
  
  const proximo = pila.ver_proximo()
  console.log(proximo)
  
  console.log(pila.ver_elementos())
  
  console.log(pila);