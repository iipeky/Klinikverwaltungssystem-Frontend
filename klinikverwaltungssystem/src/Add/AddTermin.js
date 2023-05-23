import { useState } from "react";

const AddTermin = () => {
    const [ausweis, setAusweisnummerTermin] = useState("");
    const [datum, setDatum] = useState("");
    const [zeit, setZeit] = useState("");
    const [doktorname, setDoktorname] = useState("");
    return (
        <div className="AddTermin">
            <div className="pageShape">
                <h1 className="Page"> Termine erstellen</h1>
            </div>
            <div className="shape">
                <form action="">
                    <label > Geben Sie die Ausweisnummer von Patient ein: </label>
                    <input
                        type="text"
                        required
                        value={ausweis}
                        onChange={(e) => setAusweisnummerTermin(e.target.value)}
                    />
                    <label > Wählen Sie den Datum aus: </label>
                    <input
                        type="date"
                        required
                        value={datum}
                        onChange={(e) => setDatum(e.target.value)}
                    />
                    <label >Wählen Sie den Zeitabschnitt aus: </label>
                    <select>
                        value = {zeit};
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        onChange={(e) => setZeit(e.target.value)}

                    </select>
                    <label > Wählen Sie den Namen von Doktor aus: </label>
                    <select>
                        value ={doktorname};
                        <option value="Doktor1">Doktor1</option>
                        <option value="Doktor2">Doktor2</option>
                        <option value="Doktor3">Doktor3</option>
                        <option value="Doktor4">Doktor4</option>
                        onChange={(e) => setDoktorname(e.target.value)}
                    </select>
                    <button>Add Termin</button>
                </form>
            </div>
        </div>
    );


}
export default AddTermin;