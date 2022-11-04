class SeparaArray {

    separa(lista, frequency) {

        let array = [];
        let subArray = [];
        let controle = 0

        try {
            if (typeof (lista) === "object") {
                if (typeof (frequency) === "number") {
                    if (frequency > 0) {
                        if (lista.length > 0) {

                            for (let i = 0; i < lista.length; i++) {
                                if ((i + 1) % frequency === 0) {
                                    controle = frequency - 1;
                                    while (controle >= 0) {
                                        subArray.push(lista[i - controle]);
                                        controle--;
                                    }
                                    array.push(subArray);
                                    subArray = [];
                                    controle = 0;
                                } else if (i === lista.length - 1) {
                                    controle = i % frequency;
                                    while (controle >= 0) {
                                        subArray.push(lista[i - controle]);
                                        controle--;
                                    }
                                    array.push(subArray);
                                    subArray = [];
                                }
                            }
                            return array

                        } else {
                            throw new RangeError("Array must have at least one element");
                        }
                    } else {
                        throw new RangeError("Frequency must be greater than zero");
                    }
                } else {
                    throw new TypeError("Frequency must be a number");
                }
            } else {
                throw new TypeError("Argument must be an array");
            }
        } catch (error) {
            console.log(error);
        }

    }
}


const array9 = new SeparaArray();
console.log(array9.separa([1, 2, 3, 4, 5], 4));