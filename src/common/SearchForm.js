import React, { useState } from "react";
import "./SearchForm.css"

const SearchForm = ({ searchFor }) => {
    const [formData, setFormData] = useState({ search: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    async function handleSubmit(e) {
        e.preventDefault();
        searchFor(formData.search)
        setFormData({ search: "" })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                id="search"
                type="text"
                name="search"
                placeholder="Enter Search Term"
                onChange={handleChange}
                value={formData.search}
            />
            <button>Submit</button>
        </form>
    )
}
export default SearchForm;