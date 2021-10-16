import React from "react";
import ReactTestUtils from 'react-dom/test-utils'
import { CustomerForm } from "../src/components/CustomerForm";
import { createContainer } from "./domManipulators";

describe('Customer From', () => {

    let render, container;

    const form = id => container.querySelector(`form[id="${id}"]`);

    const labelsFor = formElement => container.querySelector(`label[for="${formElement}"]`);

    const field = (formId, fieldName) => form(formId).elements[fieldName];

    const expectToBeInputFieldOfTypeText = formElement => {
        expect(formElement).not.toBeNull();
        expect(formElement.tagName).toEqual('INPUT');
        expect(formElement.type).toEqual('text');
    };

    beforeEach(() => {
        ({ render, container } = createContainer());
    })

    it('renders a form', () => {

        render(<CustomerForm />);

        expect(form("customer")).not.toBeNull();
    })

    describe('First name field test', () => {

        it('renders the first name field as text box', () => {

            render(<CustomerForm />);

            expectToBeInputFieldOfTypeText(field('customer', 'firstName'));
        })

        it('includes the existing value for the first name', () => {

            render(<CustomerForm firstName="Ashley" />);

            expect(field('customer', 'firstName').value).toEqual('Ashley');
        })

        it('renders a label for the first name', () => {

            render(<CustomerForm firstName="Ashley" />);

            expect(labelsFor('firstName')).not.toBeNull();
            expect(labelsFor('firstName').textContent).toEqual('First Name');
        })

        it('assigns an id  that matches label id for the first name', () => {

            render(<CustomerForm firstName="Ashley" />);

            expect(field('customer', 'firstName').id).toEqual('firstName');
        })


        it('saves first name when form submits', async () => {

            expect.hasAssertions();

            render(<CustomerForm firstName="Ashley" onSubmit={({ firstName }) => expect(firstName).toEqual('Ashley')} />);

            await ReactTestUtils.Simulate.submit(form('customer'));
        })

        it('saves new first name when form submits', async () => {

            expect.hasAssertions();

            render(<CustomerForm firstName="Ashley" onSubmit={({ firstName }) => expect(firstName).toEqual('Jamie')} />);

            await ReactTestUtils.Simulate.change(field('customer', 'firstName'), {
                target: { value: 'Jamie' }
            });

            await ReactTestUtils.Simulate.submit(form('customer'));
        })

    });

    describe('Last name field test', () => {

        it('renders the last name field as text box', () => {

            render(<CustomerForm />);

            expectToBeInputFieldOfTypeText(field('customer', 'lastName'));
        })

        it('includes the existing value for the last name', () => {

            render(<CustomerForm firstName="Ashley" lastName="Whittall" />);

            expect(field('customer', 'lastName').value).toEqual('Whittall');
        })

        it('renders a label for the last name', () => {

            render(<CustomerForm firstName="Ashley" lastName="Whittall" />);

            expect(labelsFor('lastName')).not.toBeNull();
            expect(labelsFor('lastName').textContent).toEqual('Last Name');
        })

        it('assigns an id  that matches label id for the last name', () => {

            render(<CustomerForm firstName="Ashley" lastName="Whittall" />);

            expect(field('customer', 'lastName').id).toEqual('lastName');
        })


        it('saves last name when form submits', async () => {

            expect.hasAssertions();

            render(<CustomerForm firstName="Ashley" lastName="Whittall" onSubmit={({ lastName }) => expect(lastName).toEqual('Whittall')} />);

            await ReactTestUtils.Simulate.submit(form('customer'));
        })

        it('saves new last name when form submits', async () => {

            expect.hasAssertions();

            render(<CustomerForm firstName="Ashley" lastName="Whittall" onSubmit={({ lastName }) => expect(lastName).toEqual('James')} />);

            await ReactTestUtils.Simulate.change(field('customer', 'lastName'), {
                target: { value: 'James' }
            });

            await ReactTestUtils.Simulate.submit(form('customer'));
        })

    });

})