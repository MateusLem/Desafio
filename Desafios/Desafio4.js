class ConverteArray {
    
    converte(lista) {

        let obj = {};

        try {
            if (typeof (lista) === "object") {
                if (lista.length > 0) {


                    for (let i = 0; i < lista.length; i++) {
                        obj[i] = lista[i];
                    }
                    return obj;

                    
                } else {
                    throw new RangeError("Array must have at least one element");
                }
            } else {
                throw new TypeError("Argument must be an array");
            }
        } catch (error) {
            console.log(error);
        }
        
    }
}

const array4 = new ConverteArray();
console.log(array4.converte([["c", 2], ["d", 4]]));


