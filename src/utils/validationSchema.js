export const validationSchema = {
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        },
        isEmail: {
            message: "Email введён некорректно"
        }
    },
    password: {
        isRequired: {
            message: "Пароль обязателен для заполнения"
        },
        min: {
            message: "Пароль должен содержать минимум 8 символов",
            param: 8
        },
        isCapitalSimbol: {
            message: "Пароль должен содержать заглавные буквы"
        },
        isDigit: {
            message: "Пароль должен содержать числа"
        }
    },
    profession: {
        isRequired: {
            message: "Професия обязательна для заполнения"
        }
    },
    qualities: {
        isRequired: {
            message: "Качества обязательна для заполнения"
        }
    },
    name: {
        isRequired: {
            message: "Имя не должно быть пустым"
        }
    },
    licence: {
        isRequired: {
            message: "Просто поставь галку"
        }
    }
};
