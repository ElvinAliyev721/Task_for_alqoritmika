//1
function One_Func(sentence) {
    let arr_of_sentence = sentence.split(' ')
    let str_arr = ""
    for (let i = 0; i < arr_of_sentence.length; i++) {
        str_arr += arr_of_sentence[i];
    }
    return sentence.length - str_arr.length
}
//2
function Two_Func(array) {
    let sum = 0
    let counter = 0
    let medium
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        counter++
    }
    medium = sum / counter
    return medium
}
//3
function Three_Func(total_arr) {
    let Odd_numbers = []
    for (let i = 0; i < total_arr.length; i++) {
        if (total_arr[i] % 2 == 0) {
            Odd_numbers.push(total_arr[i])
        }
    }
    return Odd_numbers
}
//4
function Fourth_Func(array) {
    let median = Two_Func(array)
    console.log(median)
    let array_of_bigs = []
    for (let i = 0; i < array.length; i++) {
        if (median < array[i]) {
            array_of_bigs.push(array[i])
        }
    }
    return array_of_bigs
}
//5
function Fifth_Func(sentence) {
    let array = sentence.split(' ')
    let new_sentence = ""
    for (let i = 0; i < array.length; i++) {
        new_sentence += array[i]
        if (i < array.length - 1) {
            new_sentence += ","
        }
    }
    return new_sentence
}
//6.1 sozlerin yerini tersine deyishir
function Six_Func(array) {
    let new_Arr = []
    for (let i = array.length - 1; i >= 0; i++) {
        new_Arr.push(array[i])
    }
    return new_Arr
}
//6.2 sozleri tersine chevirib yerini saxlayir
function Six_Func_2(array) {
    let word
    for (let i = 0; i < array.length; i++) {
        word = array[i].split("").reverse().join("");
        array[i] = word
    }
    return array
}
//6.3 sozleri de deyishir yerini de
function Six_Func_3(array) {
    let new_Arr = []
    for (let i = array.length - 1; i >= 0; i++) {
        new_Arr.push(array[i].split("").reverse().join(""))
    }
    return new_Arr
}
//7
function Seven_Func(array1, array2) {
    let Avarage_array = []
    for (let i = 0; i < array1.length; i++) {
        const includesValue = array2.some(element => {
            return element.toLowerCase() === array1[i].toLowerCase();
        });
        if (includesValue) {
            Avarage_array.push(array1[i])
        }
    }
    return Avarage_array
}
//8
function Eig_Func(array, word) {
    let new_array = []
    for (let i = 0; i < array.length; i++) {
        if (array[i][0].trim().toLowerCase() == word.toLowerCase()) {
            new_array.push(array[i])
        }
    }
    return new_array
}
//9
function Nine_Func(str){
    return str.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
}

console.log(Nine_Func("Elvin Salam"))