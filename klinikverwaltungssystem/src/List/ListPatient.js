import React, { useEffect } from "react";
import { useState } from "react";
import PostPatient from "../Post/PostPatient";

function ListPatient() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postPatientlist, setPatientlist] = useState([]);
    <div className="pageShape">
        <h1 className="Page"> Patiente listen</h1>
    </div>
    useEffect(() => {
        fetch("/patienteListen")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setPatientlist(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error</div>;
    } else if (!isLoaded) {
        return <div> Loading...</div>;
    } else {
        return (
            <div>
                {
                    postPatientlist.map(patient => (
                        <PostPatient name={patient.name} nachname={patient.nachname} Ausweisnummer={patient.Ausweisnummer} Telephonenummer={patient.Telephonenummer}></PostPatient>
                    ))
                }
            </div>
        );
    }

}

export default ListPatient;