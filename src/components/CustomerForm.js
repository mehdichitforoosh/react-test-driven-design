import React, { useState } from "react"

export const CustomerForm = ({ firstName, lastName, onSubmit }) => {

    const [customer, setCustomer] = useState({ firstName, lastName });

    const handleChange = ({ target }) => {
        setCustomer(customer => ({
            ...customer,
            [target.name]: target.value
        }))
    }

    return (
        <form id="customer" onSubmit={() => onSubmit(customer)}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName"
                value={customer.firstName}
                onChange={handleChange} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName"
                value={customer.lastName}
                onChange={handleChange} />
        </form>
    )
}