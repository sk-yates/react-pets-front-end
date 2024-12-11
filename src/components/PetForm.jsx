// src/components/PetForm.jsx

import { useState } from 'react';

const PetForm = (props) => {
    const initialState = {
        name: '',
        age: '',
        breed: '',
    }
    const [formData, setFormData] = useState(props.selected ? props.selected : initialState);

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };


    const handleSubmitForm = (evt) => {
        console.log("Add pet function:", props.handleAddPet);
        evt.preventDefault();
        if (props.selected) {
            props.handleUpdatePet(formData, props.selected._id)
        } else {
            props.handleAddPet(formData);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmitForm}>
                    <label htmlFor="name"> Name </label>
                    <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="age"> Age </label>
                    <input
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <label htmlFor="breed"> Breed </label>
                    <input
                        id="breed"
                        name="breed"
                        value={formData.breed}
                        onChange={handleChange}
                    />
                    <button type="submit">{props.selected ? 'Update Pet' : 'Add New Pet'}</button>
                </form>
            </div>
        </>

    );
};

export default PetForm;
