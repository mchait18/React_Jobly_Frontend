import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css"

/** Show limited information about a company
 *
 * Is rendered by CompanyList to show a "card" for each company.
 *
 * CompanyList -> CompanyCard
 */

const CompanyCard = ({ company }) => {
    return (
        <Link className="CompanyCard card" to={`/companies/${company.handle}`} >
            <div className="card-body">
                <h6 className="card-title">
                    {company.name}
                    {company.logoUrl &&
                        <img src={company.logoUrl}
                            alt={company.name}
                            className="float-right ml-5" />}
                </h6>
                <p><small>{company.description}</small> </p>
            </div>
        </Link>
    )
}

export default CompanyCard;

