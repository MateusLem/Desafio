class PassaArray {

    passa(lista) {

        let array = [];

        try {
            if (typeof (lista) === "object") {
                if (lista.length > 0) {


                    for (let i = 0; i < lista.length; i++) {
                        if (!array.includes(lista[i])) {
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

const array6 = new PassaArray();
console.log(array6.passa([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));