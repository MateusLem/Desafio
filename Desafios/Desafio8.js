class DesaninhaArrray {
    
    ninho(lista) {

        let array = [];

        try {
            if (typeof (lista) === "object") {
                if (lista.length > 0) {


                    for (let i = 0; i < lista.length; i++) {
                        if (typeof (lista[i]) === 'object') {
                            for (let j = 0; j < lista[i].length; j++) {
                                array.push(lista[i][j]);
                            }
                        } else {
                            array.push(lista[i]);
                        }
                    }
                    return array;


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

const array8 = new DesaninhaArrray();
console.log(array8.ninho([1, 2, [3], [4, 5]]));