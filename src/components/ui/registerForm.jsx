import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/RadioField";
import API from "../../API";
import { validate } from "../../utils/validatator";
import { validationSchema } from "../../utils/validationSchema";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";
const RegesterForm = () => {
    const [data, setData] = useState({ email: "", password: "", profession: "", sex: "male", qalities: [], licence: false });
    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState();
    const [qualities, setQualities] = useState({});
    useEffect(() => {
        const errors = validate(data, validationSchema);
        setErrors(errors);
    }, [data]);
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
        API.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const handleChange = (target) => {
        // console.log("target", target.value, target.name);
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data);
    };
    const isValid = Object.keys(errors).length === 0;
    return (

        <form onSubmit={handleSubmit}>

            <TextField label = 'Email'
                type= 'text'
                name ='email'
                value={data.email}
                onChange ={handleChange}
                error = {errors.email || ""}/>

            <TextField label = 'Password'
                type= 'password'
                name ='password'
                value={data.password}
                onChange ={handleChange}
                error = {errors.password || ""}/>

            <SelectField label = 'Выберите профессию'
                defaultOption = 'Choose...'
                options ={professions}
                value={data.profession}
                onChange ={handleChange}
                error = {errors.profession || ""}/>

            <RadioField options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
                { name: "Other", value: "other" }
            ]}
            name ='sex'
            value={data.sex}
            onChange ={handleChange}
            label = 'Выберите пол'
            />
            <MultiSelectField
                label = 'Выберите качества'
                options ={qualities}
                name="qalities"
                onChange ={handleChange}
            />
            <CheckBoxField
                name ='licence'
                value={data.licence}
                onChange ={handleChange}
                error = {errors.licence}
            >
                Подтвердить <a>лицензионное соглашение</a>
            </CheckBoxField>
            <button type="submit" disabled = {!isValid} className='btn btn-primary w-100 mx-auto'>Submit</button>
        </form>

    );
};

export default RegesterForm;
