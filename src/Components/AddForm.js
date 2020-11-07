import React, { useState } from "react";
import firebase from "firebase"
import db from "../firebase.js"

function AddForm(props) {
    const [forminput, setform] = useState("");
    const sendevent = (e) => {
        e.preventDefault();
        db.collection(props.collection).add({
          event: forminput,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
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
