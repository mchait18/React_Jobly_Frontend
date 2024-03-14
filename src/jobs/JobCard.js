import React, { useContext } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

const JobCard = ({ job }) => {
    const { applyToJob, hasAppliedToJob } = useContext(UserContext);
    return (
        <div className="JobCard card">
            <div className="card-body">
                <h6 className="card-title">{job.title}</h6>
                <p>{job.companyName}</p>
                {job.salary && <div><small>Salary: {formatSalary(job.salary)} </small></div>}
                {job.equity !== undefined && <div><small>Equity: {job.equity} </small></div>}
                {hasAppliedToJob(job.id) ? <button
                    className="btn btn-danger font-weight-bold text-uppercase float-right"
                    disabled>Applied</button>
                    : <button
                        className="btn btn-danger font-weight-bold text-uppercase float-right"
                        onClick={() => applyToJob(job.id)}>Apply </button>}
            </div>
        </div>
    )
    /** Render integer salary like '$1,250,343' */

    function formatSalary(salary) {
        const digitsRev = [];
        const salaryStr = salary.toString();

        for (let i = salaryStr.length - 1; i >= 0; i--) {
            digitsRev.push(salaryStr[i]);
            if (i > 0 && i % 3 === 0) digitsRev.push(",");
        }

        return digitsRev.reverse().join("");
    }

}
export default JobCard;
