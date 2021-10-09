/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/components/Appointment';


describe('Appointment', () => {

    let customer;
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.innerHTML = '';
    })

    it('renders the customer first name', () => {
        customer = { firstName: 'Ashley' };
        const component = <Appointment customer={customer} />;
        document.body.appendChild(container);

        ReactDOM.render(component, container);

        expect(document.body.textContent).toBe(customer.firstName);
    })

    it('renders another customer first name', () => {
        customer = { firstName: 'Jordan' }
        const component = <Appointment customer={customer} />
        document.body.appendChild(container);

        ReactDOM.render(component, container);

        expect(document.body.textContent).toBe(customer.firstName);
    })
})