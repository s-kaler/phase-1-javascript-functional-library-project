function myEach(collection, callback){
    let funcArr = collection;
    if(typeof collection === 'object'){
        funcArr = Object.values(collection);
    }
    for(let i = 0; i < funcArr.length; i++){
        callback(funcArr[i]);
    }

    return collection;
}

function myMap(collection, callback){
    let funcArr = collection;
    if(typeof collection === 'object'){
        funcArr = Object.values(collection);
    }
    if(typeof collection === 'object'){
        return Object.values(collection).map(callback)
    }
    else{
        return collection.map(callback);
    }
}

function myReduce(collection, callback, acc){
    let funcArr = collection;
    if(typeof collection === 'object'){
        funcArr = Object.values(collection);
    }
    if(acc){
        //acc = collection[0]
        return funcArr.reduce(callback, acc)
    }
    return funcArr.reduce(callback)
   
}

function myMap(collection, callback){
    if(typeof collection === 'object'){
        return Object.values(collection).map(callback)
    }
    else{
        return collection.map(callback);
    }

}

function myFind(collection, predicate){
    let funcArr = collection;
    if(typeof collection === 'object'){
        funcArr = Object.values(collection);
    }
    return funcArr.find(predicate);
}

function myFilter(collection, predicate){
    let funcArr = collection;
    if(typeof collection === 'object'){
        funcArr = Object.values(collection);
    }
    return funcArr.filter(predicate)
}

function mySize(collection){
    let funcArr = collection;
    if(typeof collection === 'object'){
        funcArr = Object.values(collection);
    }
    return funcArr.length;
}

function myFirst(array, n){
    let newArr = [];
    if(n){
        for(let i = 0; i < n; i++){
            newArr.push(array[i]);
        }
        return newArr;
    }
    return array[0];
}

function myLast(array, n){
    let newArr = [];
    if(n){
        for(let i = array.length - 1; i >= (array.length - n); i--){
            newArr.unshift(array[i]);
        }
        return newArr;
    }
    return array[(array.length - 1)]
}

function myKeys(collection){
    return Object.keys(collection);
}

function myValues(collection){
    return Object.values(collection)
}