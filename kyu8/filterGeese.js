function gooseFilter(birds) {

    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(e => !geese[geese.indexOf(e)])

};

/*
P - Params is an array that holds strings on birds name
R - Return an array containing all of the strings in the input array except those that match strings in geese
E - Example: birds = ['duck', 'duck', 'goose'] and geese = ['goose'] -> return ['duck', 'duck']
P - filter the birds array. each element that does not match the element of geese will be filter
*/