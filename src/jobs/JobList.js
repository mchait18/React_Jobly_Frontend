import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JoblyApi from "../JoblyApi";
import SearchForm from "../common/SearchForm";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of jobs.
 *
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 *
 * JobList -> JobCard
 *
 * This is routed to at /jobs
 */

function JobList() {
    const [jobs, setJobs] = useState(null)

    useEffect(function getJobsOnMount() {
        search();
    }, []);

    /** Triggered by search form submit; reloads jobs. */
    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if (!jobs)  return <LoadingSpinner />;

    return (
        <div className="JobList col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {jobs.length ? (
                <div className="JobCardList">
                    {jobs.map(job => (
                        <JobCard job={job} key={job.id} />
                    ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
        </div>
    );
}

export default JobList;
