module.exports = function toReadable(number) {
    let newArray = [
        [
            "one hundred",
            "two hundred",
            "three hundred",
            "four hundred",
            "five hundred",
            "six hundred",
            "seven hundred",
            "eight hundred",
            "nine hundred",
        ],
        [
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ],
        [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ],
        [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
    ];
    let x = [];
    let div = 100;
    let n = number;
    let res;
    for (i = 0; i < 3; i++) {
        res = Math.floor(n / div);
        x[i] = res;
        n = n - res * div;
        div = div / 10;
    }
    let meow = "";
    for (i = 0; i < 3; i++) {
        switch (x[i]) {
            case 0:
                if(i == 2 && meow.length == 0){
                    meow = " zero";
                }
                break;
            case 1:
                if (i == 1) {
                    i = i + 1;
                    switch (x[i]) {
                        case 0:
                            meow = meow +  " " + newArray[3][0];
                            break;
                        case 1:
                            meow = meow + " " +  newArray[3][1];
                            break;
                        case 2:
                            meow = meow +  " " + newArray[3][2];
                            break;
                        case 3:
                            meow = meow +  " " + newArray[3][3];
                            break;
                        case 4:
                            meow = meow +  " " + newArray[3][4];
                            break;
                        case 5:
                            meow = meow +  " " + newArray[3][5];
                            break;
                        case 6:
                            meow = meow +  " " + newArray[3][6];
                            break;
                        case 7:
                            meow = meow +  " " + newArray[3][7];
                            break;
                        case 8:
                            meow = meow +  " " + newArray[3][8];
                            break;
                        case 9:
                            meow = meow +  " " + newArray[3][9];
                            break;
                    }
                } else {
                    meow = meow +  " " + newArray[i][0];
                }
                break;
            case 2:
                meow = meow + " " + newArray[i][1];
                break;
            case 3:
                meow = meow +  " " + newArray[i][2];
                break;
            case 4:
                meow = meow +  " " + newArray[i][3];
                break;
            case 5:
                meow = meow +  " " + newArray[i][4];
                break;
            case 6:
                meow = meow +  " " + newArray[i][5];
                break;
            case 7:
                meow = meow +  " " + newArray[i][6];
                break;
            case 8:
                meow = meow +  " " + newArray[i][7];
                break;
            case 9:
                meow = meow +  " " + newArray[i][8];
                break;
        }
    }
    let woof = meow.slice(1)
    return woof;
};
