function word(str) {

    let result = ""
    for (let i = str.length - 1; i>= 0; i--  ){
        result += str  [i]

    }
    console.log(result)

}
word('привет меня зовут Нурбакыт');




function average( arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;

}
    let numbers = [17.4, 21.6, 25.2, 28.7 , 30.1]

console.log(average(numbers))

