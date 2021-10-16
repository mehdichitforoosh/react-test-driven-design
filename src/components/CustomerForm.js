import React, { useState } from "react"

export const CustomerForm = ({ firstName, onSubmit }) => {

    const [customer, setCustomer] = useState({ firstName });

    const handleChangeFirstName = ({ target }) => {
        console.log(target);
        setCustomer(customer => ({
            ...customer,
            firstName: target.value
        }))
    }

    return (
        <form id="customer" onSubmit={() => onSubmit(customer)}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName"
                value={customer.firstName}
                onChange={handleChangeFirstName} />
        </form>
    )
}