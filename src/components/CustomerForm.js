import React, { useState } from "react"

export const CustomerForm = ({ firstName, lastName, onSubmit }) => {

    const [customer, setCustomer] = useState({ firstName, lastName });

    const handleChangeFirstName = ({ target }) => {
        console.log(target);
        setCustomer(customer => ({
            ...customer,
            firstName: target.value
        }))
    }

    const handleChangeLastName = ({ target }) => {
        console.log(target);
        setCustomer(customer => ({
            ...customer,
            lastName: target.value
        }))
    }

    return (
        <form id="customer" onSubmit={() => onSubmit(customer)}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName"
                value={customer.firstName}
                onChange={handleChangeFirstName} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName"
                value={customer.lastName}
                onChange={handleChangeLastName} />
        </form>
    )
}