export default {
    isRequired: (value) => Boolean(value.trim()),
    isEmail: (value) => /^\S+@\S+\.\S+$/g.test(value),
    min: (value, length) => value.length >= length,
    isCapitalSimbol: (value) => /[A-Z]+/g.test(value),
    isDigit: (value) => /\d+/g.test(value)
};
