class ValoresIguais {

    igual(lista1, lista2) {

        let array = [];

        try {
            if (typeof (lista1) === "object" && typeof (lista2) === "object") {
                if (lista1.length > 0 && lista2.length > 0) {

                    for (let i = 0; i < lista1.length; i++) {
                        if (lista2.includes(lista1[i])) {
                            array.push(lista1[i]);
                        }
                    }
                    return array

                } else {
                    throw new RangeError("Arrays must have at least one element");
                }
            } else {
                throw new TypeError("Arguments must be arrays");
            }
        } catch (error) {
            console.log(error);
        }

    }
}

const array10 = new ValoresIguais();
console.log(array10.igual([6, 8], [8, 9]));