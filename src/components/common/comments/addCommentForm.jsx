import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "./../../../API/index";
import SelectField from "./../form/selectField";
import TextAreaField from "../form/textAreaField.";
import { validate } from "../../../utils/validatator";

const initialData = { userId: "", content: "" };

const AddCommentForm = ({ onSubmit }) => {
    const [data, setData] = useState(initialData);
    const [users, setUsers] = useState({});
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validatorConfig = {
        userId: {
            isRequired: {
                message: "Выберите от ччего имени выы хотите отпправить сообщение"
            }
        },
        content: {
            isRequired: {
                message: "Сообщение не может быть пустым"
            }
        }
    };
    const validation = () => {
        const errors = validate(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);
    const clearForm = () => {
        setData(initialData);
        setErrors({});
    };
    const handlSabmit = (e) => {
        e.preventDefault();
        const isValid = validation();
        if (!isValid) return;
        onSubmit(data);
        clearForm();
    };

    const arrayUsers = users && Object.keys(users).map((i) => ({
        name: users[i].name,
        _id: users[i]._id
    }));

    return (
        <div>
            <h2>New comment</h2>
            <form onSubmit={handlSabmit}>
                <SelectField
                    selectedValue = {{}}
                    options ={arrayUsers}
                    value={data.userId}
                    name="userId"
                    onChange ={handleChange}
                    error = {errors.userId || ""}
                />
                <TextAreaField
                    label = 'Сообщение'
                    name ='content'
                    value={data.content}
                    onChange ={handleChange}
                    error = {errors.content || ""}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">Опубликовать</button>
                </div>

            </form>
        </div>
    );
};

AddCommentForm.propTypes = {
    onSubmit: PropTypes.func
};
export default AddCommentForm;
