import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import API from "../../../API/index";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/RadioField";
import MultiSelectField from "../../common/form/multiSelectField";
// import CheckBoxField from "../../common/form/checkBoxField";
import { validate } from "../../../utils/validatator";
import { validationSchema } from "../../../utils/validationSchema";
const UserPageEdit = () => {
    const { userId } = useParams();
    const history = useHistory();
    const [user, setUser] = useState();
    const [data, setData] = useState();
    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState();
    const [qualities, setQualities] = useState({});
    useEffect(() => {
        API.users.getById(userId).then((data) => setData(data));
        API.professions.fetchAll().then((data) => setProfessions(data));
        API.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    useEffect(() => {
        if (data) {
            const errors = validate(data, validationSchema);
            setErrors(errors);
        }
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const handleChangeProf = (target) => {
        const prof = professions.find((item) => { return item._id === target.value; });
        setData((prevState) => ({ ...prevState, [target.name]: prof }));
    };
    const handleChangeQualities = (target) => {
        const qualities = target.value.map((item) => ({
            _id: item.value,
            name: item.label,
            color: item.color
        }));
        setData((prevState) => ({ ...prevState, qualities }));
    };
    const handleReturn = () => {
        history.push(`/users/${userId}`);
    };
    const handleEdit = async () => {
        await API.users.update(userId, data);
        handleReturn();
    };

    const isValid = Object.keys(errors).length === 0;
    return (data && (
        <div className="w-50 ml-4 p-3">
            <TextField label = 'Name'
                type= 'text'
                name ='name'
                value={data.name}
                onChange ={handleChange}
                error = {errors.name || ""}/>
            <TextField label = 'Email'
                type= 'text'
                name ='email'
                value={data.email}
                onChange ={handleChange}
                error = {errors.email || ""}
            />
            <SelectField label = 'Выберите профессию'
                defaultOption = 'Choose...'
                selectedValue = {data.profession}
                options ={professions}
                value={data.profession.name}
                name="profession"
                onChange ={handleChangeProf}
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
                name="qualities"
                onChange ={handleChangeQualities}
                defaultValue = {data.qualities}
                error = {errors.qualities || ""}
            />
            <div className="mb-4">
                <button type="button" disabled = {!isValid} className='btn btn-primary' onClick={handleEdit}>
        Обновить
                </button>
            </div>
            <div className="mb-4">
                <button type="button" onClick={handleReturn}>
    Отменить
                </button>
            </div>
        </div>
    ));
};

export default UserPageEdit;
