class InverteArray {

    inverte(lista) {

        let array = [];

        let len = lista.length;

        try {
            if (typeof (lista) === "object") {
                if (lista.length > 0) {


                    while (len > 0) {
                        array.push(lista[len - 1]);
                        len--;
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

const array2 = new InverteArray();
console.log(array2.inverte([1, 2, 3, 4]));