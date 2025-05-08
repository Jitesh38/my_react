
function sort(array) {
    for (let i = 0; i < array.length; i++) {
        setTimeout(() => {
            console.log(array[i]);
        }, array[i])
    }
}

sort([9, 4, 6, 7, 2, 1]);