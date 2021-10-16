import React from "react"

export const CustomerForm = ({ firstName }) => {

    return (
        <form id="customer">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" readOnly value={firstName} />
        </form>
    )
}