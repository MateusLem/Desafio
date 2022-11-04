class FiltraArray {

    filtra(lista, filter) {

        let array = [];

        try {
            if (typeof (lista) === "object") {
                if (typeof (filter) === "object") {
                    if (lista.length > 0) {


                        for (let i = 0; i < lista.length; i++) {
                            if (!filter.includes(lista[i])) {
                                array.push(lista[i]);
                            }
                        }
                        return array;


                    } else {
                        throw new RangeError("Array must have at least one element");
                    }
                } else {
                    throw new TypeError("Filter must be a object");
                }
            } else {
                throw new TypeError("Argument must be an array");
            }
        } catch (error) {
            console.log(error);
        }

    }

}

const array5 = new FiltraArray();
console.log(array5.filtra([5, 4, 3, 2, 5], [5, 3]));