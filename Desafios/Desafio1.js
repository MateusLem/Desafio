class CriaArray {

    cria(frequency, element) {

        let array = [];

        try {
            if (typeof (frequency) === "number") {
                if (frequency > 0) {


                    for (let i = 0; i < frequency; i++) {
                        array.push(element);
                    }

                    
                } else {
                    throw new RangeError("Frequency must be greater than zero");
                }
            } else {
                throw new TypeError("Frequency must be a number");
            }

        } catch (error) {
            console.log(error);
        }



    }

}

const array1 = new CriaArray();
console.log(array1.cria(2, "i"));

