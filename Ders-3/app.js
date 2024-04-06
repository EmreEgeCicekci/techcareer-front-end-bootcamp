// Exercise 1

let newArr = [775,5285,255,33,1028,13,48,2096,2,1011,983,10]
let temp;

for (let i = 0; i < newArr.length-1; i++) {
    for (let j = newArr.length-1; j > i; j--) {
        if(newArr[i]>newArr[j]){
            temp = newArr[i];
            newArr[i] = newArr[j];
            newArr[j] = temp;
        }
    }
}

console.log(newArr)


