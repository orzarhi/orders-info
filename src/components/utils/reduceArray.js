export const reducer = (arr) => {
    const result = arr.reduce((acc, order) => {
        acc[order.name] = order;
        return acc
    });
    return result;
}

// export const mapObject = (obj, value) => {
//     const result = obj.map(o => o[value])

//     return result;
// }