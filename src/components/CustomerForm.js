import React from "react"

export const CustomerForm = ({ firstName, onSubmit }) => {

    return (
        <form id="customer" onSubmit={() => onSubmit({ firstName })}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" readOnly value={firstName} />
        </form>
    )
}