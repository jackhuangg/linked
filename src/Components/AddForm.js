import React, { useState } from "react";

const AddFormStyle = {
    position: "absolute",
    bottom: "3%",
    left: "5%"
};

function placeholder(s) {
    if (s.charAt(s.length - 1) === 's') {
        s = s.substring(0, s.length - 1);
    }

    return s.charAt(0).toUpperCase() + s.slice(1);
}

function AddForm({ user, updateUser, updateType }) {
    const [forminput, setform] = useState("");
    const sendevent = (e) => {
        e.preventDefault();
        user[updateType].push(forminput);
        updateUser(user);
        setform("");
    };

    return (
        <div style={AddFormStyle}>
            <form>
                <input
                    onChange={(e) => setform(e.target.value)}
                    value={forminput}
                    placeholder={"Enter " + placeholder(updateType)}
                    type="text"
                />
                <button className="button" onClick={sendevent} type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddForm
