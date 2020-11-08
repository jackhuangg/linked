import React, { useState } from "react";
import firebase from "firebase"
import db from "../firebase.js"

function AddForm({user, updateUser, updateType}) {
    const [forminput, setform] = useState("");
    const sendevent = (e) => {
        e.preventDefault();
        user[updateType].push(forminput);
        updateUser(user);
        setform("");
      };
    return (
        <div>
            <form>
                <input
                onChange={(e) => setform(e.target.value)}
                value={forminput}
                placeholder="Enter Field"
                type="text"
                />
                <button className="button" onClick={sendevent} type="submit">
                Submit
                </button>
            </form>
        </div>
    )
}

export default AddForm
