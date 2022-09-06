//METODO MAP()
const numbers = [1, 2, 3, 4, 5]

const numberMulstriplesTwo = numbers.map(function(numbers){
    return numbers * 2
})

// console.log(numbers.MulstriplesTwo);


// METODO FILTER()
const ages = [8, 13, 27, 30, 22, 40];

const agesFilter = ages.filter(function(ages){
    return ages % 2 === 0;
})

// console.log(agesFilter);

//METODO REDUCE
const sumOfAges = ages.reduce(function(ages, acucumulator){
    return acucumulator + ages;
}, 0);

// console.log(sumOfAges);