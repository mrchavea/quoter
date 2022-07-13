const _REFERENCE = 0;

function missingSmallestPositive (array) {
    positiveNumbers = array.filter( number => number > 0 );
    positiveNumbersSet = new Set();
    let max = 0;
    for (let number of positiveNumbers) {
        positiveNumbersSet.add(number);
        if (number > max) max = number;
    }

    let a = 1;
    do {
        if (!positiveNumbersSet.has(a)) return a;
        a ++;
    } while (a <= max);
}




//TASK1 

function solution (A, B){

    sortedSet_A = new Set(A.sort());
    sortedSet_B = new Set(B.sort());

    let shortestArray = sortedSet_A.size >= sortedSet_B.size? sortedSet_B : sortedSet_A;
    let largestArray = sortedSet_A.size <= sortedSet_B.size? sortedSet_B : sortedSet_A;

    console.log("COND", sortedSet_B.has(sortedSet_A.),sortedSet_A.index);

    var minimumOccurrence = null;

    shortestArray.forEach(number => {
        return findSmallestOcurrence(number, largestArray)
    })

    function findSmallestOcurrence(number, arrayToFindOcurrences){
        let ocurrence = arrayToFindOcurrences.has(number) ? number : null;
        console.log("MINA", minA_Ocurrence);
        console.log("MINB", minB_Ocurrence);

        if (ocurrence !=null){
            if (!minimumOccurrence || ocurrence < minimumOccurrence) minimumOccurrence = ocurrence;
        }
    }

    return minimumOccurrence ? minimumOccurrence : -1;
}


//Task 2

function solution(N){
    const NUMBER_TO_DELETE = "5";

    let stringNumber = N.toString();

    let indexes = getIndicesOf(NUMBER_TO_DELETE, N);

    let number;

    for (let index of indexes){
        str = str.slice(0, index) + str.slice(index, stringNumber.length);
        let newNumber = Int32Array(str);
        if (newNumber >= number) number = newNumber
    }

    function getIndicesOf(searchStr, str, caseSensitive = false) {
        var searchStrLen = searchStr.length;
        if (searchStrLen == 0) {
            return [];
        }
        var startIndex = 0, index, indices = [];
        if (!caseSensitive) {
            str = str.toLowerCase();
            searchStr = searchStr.toLowerCase();
        }
        while ((index = str.indexOf(searchStr, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + searchStrLen;
        }
        return indices;
    }
    
    return number;
}