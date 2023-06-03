import React, { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";

function ListTermin() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postTerminlist, setTerminlist] = useState([]);
    useEffect(() => {
        fetch("/Termine/alleTermine")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTerminlist(result);
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
            <div className="pageShape">
                < h1 className="Page" > Termine listen</h1 >
                {
                    postTerminlist.map(termin => (
                        <Post name={termin.name} nachname={termin.nachname} Datum={termin.Datum} Doktor={termin.Doktor}></Post>
                    ))
                }
            </div>
        );
    }
}

export default ListTermin;