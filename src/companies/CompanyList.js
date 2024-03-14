import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import CompanyCard from "./CompanyCard"
import JoblyApi from "../JoblyApi";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, SearchForm }
 */

function CompanyList() {
    // const allCompanies = useContext(CompanyContext)
    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesOnMount() {
        console.debug("CompanyList useEffect getCompaniesOnMount");
        search();
    }, []);

    /** Triggered by search form submit; reloads companies. */
    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <LoadingSpinner />;

    return (
        <div className="CompanyList col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {companies.length
                ? (
                    <div className="CompanyList-list">
                        {companies.map(comp => (
                            <CompanyCard
                                company={comp}
                                key={comp.handle}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="lead">Sorry, no results were found!</p>
                )}
        </div>
    );
}

export default CompanyList;
