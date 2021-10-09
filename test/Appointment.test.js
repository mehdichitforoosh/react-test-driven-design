/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
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

    let appointments;
    let container;

    const render = component => ReactDOM.render(component, container);

    beforeEach(() => {
        container = document.createElement('div');
        const today = new Date();
        appointments = [
            {
                startsAt: today.setHours(12, 0),
            },
            {
                startsAt: today.setHours(13, 0),
            }
        ];
    })

    it('renders a div with right id', () => {

        render(<AppointmentsDayView appointments={[]} />);

        expect(container.querySelector('div#appointmentsDayView')).not.toBeNull();
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