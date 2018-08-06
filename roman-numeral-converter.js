let arr = [];



function convertToRoman(num) {

    var firstNum;

    var remainder;

    //let arr =[];

    if(num>999){

        firstNum = Math.floor(num/1000);

        remainder = num%1000;

        for(let i=0;i<firstNum;i++){

            arr.push("M");

        }

        if(remainder>0){

            return convertToRoman(remainder);

        }

    }else if(num>899){

        arr.push("CM");

        remainder =num%100;

        if(remainder>0){

            return convertToRoman(remainder);

        }

    }else if(num>499){

        firstNum = (Math.floor(num/100)-5);

        remainder = num%100;

        arr.push("D");

        for(let i=0;i<firstNum;i++){

            arr.push("C");

        }

        if(remainder>0){

            return convertToRoman(remainder);

        }



    }else if(num>399){

        arr.push("CD");

        remainder = num%100;

        if(remainder>0){

            return convertToRoman(remainder);

        }

    }else if(num>99){

        firstNum = Math.floor(num/100);

        remainder = num%100;

        for(let i=0;i<firstNum;i++){

            arr.push("C");

        }

        if(remainder>0){

            return convertToRoman(remainder);

        }

    }else if(num>89){

        arr.push("XC")

        remainder = num%90;

        if(remainder>0){

            return convertToRoman(remainder);

        }

    }else if(num>49){

        arr.push("L");

        remainder = num%50;

        if(remainder>0){

            return convertToRoman(remainder);

        }

    }else if(num>39){

        arr.push("XL");

        remainder = num%40;

        if(remainder>0){

            return convertToRoman(remainder);

        }

    }else if(num>9){

        firstNum = Math.floor(num/10);

        remainder = num%10;

        for(let i=0;i<firstNum;i++){

            arr.push("X");

        }

        if(remainder>0){

            return convertToRoman(remainder);

        }

    }else if(num==9){

        arr.push("IX");

    }else if(num>4){

        arr.push("V");

        firstNum = num-5;

        for(let i=0;i<firstNum;i++){

            arr.push("I");

        }

    }else if(num==4){

        arr.push("IV");

    }else if(num>0){

        for(let i=0;i<num;i++){

            arr.push("I")

        }

    }

    var result = arr.join("");

    console.log(result);

    arr = [];

 return result;

}



convertToRoman(36);



console.log(Math.floor(801/100)-5);



