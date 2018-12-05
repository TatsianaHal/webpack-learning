function sum(...numb) {
    let sum = 0;

    for(let i = 0; i < numb.length; i++) {
        sum += numb[i];
    }
    return sum;
}

function totalSum(...numb) {
    console.log(sum(...numb) + 10);
}

export default totalSum;