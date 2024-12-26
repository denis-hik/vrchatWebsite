export const deepEqual = (obj1:any, obj2:any) => {
    if(typeof obj1 !== typeof obj2)
        return false
    if(typeof obj1 === "object" && typeof obj2 === "object" && obj1 !== null && obj2 !== null){
        if(Object.keys(obj1).length !== Object.keys(obj2).length){ // Проверка на одинаковое количество свойств
            return false;
        }
        for(var propName in obj1){
            if (! obj2.hasOwnProperty(propName)) {
                return false;
            }
            if(! deepEqual(obj1[propName], obj2[propName]) ){ // проверка объекта в объекте
                return false;
            }
        }
    }else{
        return obj1 === obj2
    }

    return true;
}