/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'
import { Appointment } from '../src/components/Appointment';
import { AppointmentsDayView } from '../src/components/AppointmentsDayView';


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

describe('Appointments Day View', () => {

    const today = new Date();
    const appointments = [
        {
            startsAt: today.setHours(12, 0),
            customer: { firstName: 'Ashley' },
        },
        {
            startsAt: today.setHours(13, 0),
            customer: { firstName: 'Jordan' },
        }
    ];
    let container;

    const render = component => ReactDOM.render(component, container);

    beforeEach(() => {
        container = document.createElement('div');
    })

    it('renders a div with right id', () => {

        render(<AppointmentsDayView appointments={[]} />);

        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
    })

    it('renders an empty message if there is no appointments today', () => {

        render(<AppointmentsDayView appointments={[]} />);

        expect(container.querySelector('p').textContent).toEqual('There are no appointments scheduled for today.');
    })

    it('renders first appointment item in view section ', () => {

        render(<AppointmentsDayView appointments={appointments} />);

        expect(container.textContent).toMatch('Ashley');
    })

    it('renders a button element in each li element', () => {

        render(<AppointmentsDayView appointments={appointments} />);

        expect(container.querySelectorAll('li > button')).toHaveLength(2);
        expect(container.querySelectorAll('li > button')[0].type).toEqual('button');
    })

    it('renders selected item and show view with appointment customer first name', () => {

        render(<AppointmentsDayView appointments={appointments} />);

        const button = container.querySelectorAll('button')[1];

        ReactTestUtils.Simulate.click(button);

        expect(container.textContent).toMatch(appointments[1].customer.firstName);
    })


    it('renders multiple appointments in an ol element', () => {

        render(<AppointmentsDayView appointments={appointments} />);

        expect(container.querySelector('ol')).not.toBeNull();
        expect(container.querySelector('ol').children).toHaveLength(2);
    })

    it('renders multiple appointments in li elements', () => {

        render(<AppointmentsDayView appointments={appointments} />);

        expect(container.querySelectorAll('li')).toHaveLength(2);
        expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
    })
})