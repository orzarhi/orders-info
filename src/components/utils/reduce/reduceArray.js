export const reducer = (arr) => {
    const result = arr.reduce((acc, order) => {
        acc[order.name] = order;
        return acc
    });
    return result;
}
