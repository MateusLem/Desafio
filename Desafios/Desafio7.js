class ArrayGemeos {

    gemeos(lista1, lista2) {

        let valor_comparativo = 0;

        try {
            if (typeof (lista1) === "object" && typeof (lista2) === "object") {
                if (lista1.length > 0 && lista2.length > 0) {


                    for (let i = 0; i < lista1.length; i++) {
                        if (lista1[i] !== lista2[i]) {
                            valor_comparativo++;
                        }
                    }
                    if (valor_comparativo === 0) {
                        return true;
                    } else {
                        return false;
                    }
                    
                
                } else {
                    throw new RangeError("Arrays must have at least one element");
                }
            } else {
                throw new TypeError("Arguments must be arrays");
            }
        } catch(error) {
            console.log(error);
        }
    }
}


const array7 = new ArrayGemeos();
console.log(array7.gemeos([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(array7.gemeos([1, 2, 3, 4], [1, 2, 3, 5]));