import { useState } from "react";
const AddPatient = () => {
    const [name, setName] = useState("");
    const [nachname, setNachame] = useState("");
    const [ausweis, setAusweisnummer] = useState("");
    const [telephone, setTelephonenummer] = useState("");
    return (
        <div className="AddPatient">
            <div className="pageShape">
                <h1 className="Page"> Patiente hinzufügen</h1>
            </div>
            <div className="shape">
                <form action="">
                    <label> Name: </label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label> Nachname: </label>
                    <input
                        type="text"
                        required
                        value={nachname}
                        onChange={(e) => setNachame(e.target.value)}
                    />
                    <label> Ausweisnummer: </label>
                    <input
                        type="text"
                        required
                        value={ausweis}
                        onChange={(e) => setAusweisnummer(e.target.value)}
                    />
                    <label> Telephonenummer: </label>
                    <input
                        type="text"
                        required
                        value={telephone}
                        onChange={(e) => setTelephonenummer(e.target.value)}
                    />
                    <button>Add Patient</button>
                    <p>{name}</p>
                </form>
            </div>
        </div>
    );
}

export default AddPatient;