function countDown(num) {
    // base case
    if(num === 0) {
        console.log('Stop here');
        return
    }
    console.log(num);
    // recursive step
    countDown(num - 1);
}

countDown(10);
