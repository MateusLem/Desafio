class LimpaArray {

    limpa(lista) {

        let array = [];

        try {
            if (typeof (lista) === "object") {
                if (lista.length > 0) {


                    for (let i = 0; i < lista.length; i++) {
                        if (lista[i]) {
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

const array3 = new LimpaArray();
console.log(array3.limpa([1, '', undefined, 0, 4, 'ola']));