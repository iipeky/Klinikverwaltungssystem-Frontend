import React from "react";

function Post(props) {
    const [name, nachname, Datum, Doktor] = props;
    return (
        <div>
            {name} {nachname} {Datum} {Doktor}
        </div>
    )
}

export default Post;