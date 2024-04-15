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
        <div className="SearchForm mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control form-control-lg flex-grow-1"
                    id="search"
                    type="text"
                    name="search"
                    placeholder="Enter Search Term"
                    onChange={handleChange}
                    value={formData.search}
                />
                <button type="submit" className="btn btn-lg btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default SearchForm;