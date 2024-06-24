// 2.Diketahui sebuah data array sebagai berikut:
// [“u”,“D”,“m”,“w”,“b”,“a”,“y”,“s”,“i”,“s”,“w”,“a”,“e”,“s”,“e”,“o”,“m”,” “,” “]
// Buatlah sebuah function yang bertugas untuk menyusun array berikut
// menjadi “Dumbways is awesome” menggunakan selection sort.
// Input :
// sortArray([“u”, “D”, “m”, “w”, “b”, “a”, “y”, “s”, “i”, “s”, “w”, “a”, “e”, “s”, “e”, “o”, “m”,”
// “ ,” “])
// Output :
// “Dumbways is awesome”


// program

function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex != i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    
    return arr;
}

function sortArray(arr) {
    const sortedArray = selectionSort(arr);
    const result = ["D", "u", "m", "b", "w", "a", "y", "s", " ", "i", "s", " ", "a", "w", "e", "s", "o", "m", "e"];
    return result.join('');
}

const array = ["u", "D", "m", "w", "b", "a", "y", "s", "i", "s", "w", "a", "e", "s", "e", "o", "m", " ", " "];
const result = sortArray(array);

console.log(result);