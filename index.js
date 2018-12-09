// Write your solution in this file!
let driver = {};

let updateDriverWithKeyAndValue = (driver, key, value) =>{
    
    let newDriver = {...driver};
        
    newDriver[key] = value;

    return newDriver;
}

let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) =>{

    driver[key] = value;

    return driver;
}

let deleteFromDriverByKey = (driver, key) => {
    
    let newDriver = {...driver};

    delete newDriver[key];

    return newDriver;
}

let destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key];

    return driver;
}
