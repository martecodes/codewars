const dataReverse = (data) => {
    //data needs to be reverse
    //break data in chunks of 8 with splice=> flatten new array => return array
    //[100000001000011010000011] => [[10000000],[10000110],[10000011]]
    // => [[10000011],[10000110],[10000000]] => [100000111000011010000000]
    //if data length is less than <= 8 just reverse it
    const bytes = [];

    for (let i = 0; i < data.length; i += 8) {
        bytes.unshift(...data.slice(i, i + 8));
    }
    return bytes;
};
