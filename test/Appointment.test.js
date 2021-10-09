/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/components/Appointment';


describe('Appointment', () => {

    let customer;
    let container;

    const render = component => ReactDOM.render(component, container);

    beforeEach(() => {
        container = document.createElement('div');
    })

    it('renders the customer first name', () => {
        customer = { firstName: 'Ashley' };

        render(<Appointment customer={customer} />);

        expect(container.textContent).toBe(customer.firstName);
    })

    it('renders another customer first name', () => {
        customer = { firstName: 'Jordan' }

        render(<Appointment customer={customer} />);

        expect(container.textContent).toBe(customer.firstName);
    })
})