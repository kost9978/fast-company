export default {
    isRequired: (value) => {
        if (typeof value === "boolean") {
            return value;
        } else if (Array.isArray(value)) {
            return value.length > 0;
        } else if (typeof value === "object") {
            return Object.keys(value).length;
        } else {
            return Boolean(value.trim());
        }
    },
    isEmail: (value) => /^\S+@\S+\.\S+$/g.test(value),
    min: (value, length) => value.length >= length,
    isCapitalSimbol: (value) => /[A-Z]+/g.test(value),
    isDigit: (value) => /\d+/g.test(value)
};
