function myEach (collection, callback) {
    let collectionValues = [];

    if(Array.isArray(collection) === false) {
        collectionValues = Object.values(collection);
    } else {
        collectionValues = [...collection];
    }

    for(const value of collectionValues) {
        callback(value);
    }
    return collection;
}

function myMap (collection, callback) {
    let collectionValues = [];

    if(Array.isArray(collection) === false) {
        collectionValues = Object.values(collection);
    } else {
        collectionValues = [...collection];
    }

    let newCollectionValues = []
    for(const value of collectionValues) {
        newCollectionValues.push(callback(value));
    }
    
    return newCollectionValues;
}



function myReduce (collection, callback, acc = 0) {
    let collectionValues = [];

    if(Array.isArray(collection) === false) {
        collectionValues = Object.values(collection);
    } else {
        collectionValues = [...collection];
    }
    
    acc = acc || collectionValues.shift();

    for (let value in collectionValues) {
        acc = callback(acc, collectionValues[value], collectionValues);
    }
    
    return acc;
}

function myFind (collection, predicate) {
    let collectionValues = [];

    if(Array.isArray(collection) === false) {
        collectionValues = Object.values(collection);
    } else {
        collectionValues = [...collection];
    }

    for (let value in collectionValues) {
        let element = collectionValues[value]
        if (predicate(element)) {
            return element;
        }
    }
}

function myFilter (collection, predicate) {
    let collectionValues = [];
    let filteredArray = [];

    if(Array.isArray(collection) === false) {
        collectionValues = Object.values(collection);
    } else {
        collectionValues = [...collection];
    }

    for (let value in collectionValues) {
        let element = collectionValues[value]
        if (predicate(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;

}

function mySize (collection) {
    let collectionValues = [];

    if(Array.isArray(collection) === false) {
        collectionValues = Object.keys(collection);
    } else {
        collectionValues = [...collection];
    }
    return collectionValues.length;
}

function myFirst (array, n = 1) {
    let count = 1;
    let newArray = [];
    for (let value in array) {
        if (count <= n) {
            newArray.push(array[value]);
            count++
        }
        
    }
    return newArray.length > 1 ? newArray : newArray[0];
}

function myLast (array, n = 1) {
        let startingIndex = array.length - n;

        return n > 1 ? array.slice(startingIndex, array.length) : array[startingIndex];
}

function myKeys (Obj) {
    return Object.keys(Obj);
}

function myValues (Obj) {
    return Object.values(Obj);
}
