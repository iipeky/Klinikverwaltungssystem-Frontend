import React from "react";

function PostPatient(props) {
    const [name, nachname, Ausweisnummer, Telephonenummer] = props;
    return (
        <div>
            {name} {nachname} {Ausweisnummer} {Telephonenummer}
        </div>
    )
}

export default PostPatient;