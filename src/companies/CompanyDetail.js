import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from "../JoblyApi";
import JobCard from "../jobs/JobCard";

function CompanyDetail() {
    const { handle } = useParams()
    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getComp() {
            setCompany(await JoblyApi.getCompany(handle))
        }
        getComp(handle);
    }, [handle])

    if (!company) {
        return <p>Loading &hellip;</p>;
    }
    return (
        <div className="CompanyDetail col-md-8 offset-md-2">
            <h4>{company.name}</h4>
            <p>{company.description} </p>
            {company.jobs.map(job => (
                <JobCard job={job} key={job.id} />
            ))}
        </div>
    );
}

export default CompanyDetail;
