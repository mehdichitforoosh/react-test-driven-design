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

    const itRendersAsTextBox = (formName, fieldName) => {
        it('renders the first name field as text box', () => {
            render(<CustomerForm />);
            expectToBeInputFieldOfTypeText(field(formName, fieldName));
        });
    };

    const itIncludesTheExistingValue = (formName, fieldName) => {
        it('includes the existing value for the field name', () => {
            render(<CustomerForm {...{ [fieldName]: 'value' }} />);
            expect(field(formName, fieldName).value).toEqual('value');
        });
    };

    const itRendersALabelForFieldName = (fieldName, value) => {
        it('renders a label for the field name', () => {
            render(<CustomerForm firstName="Ashley" />);
            expect(labelsFor(fieldName)).not.toBeNull();
            expect(labelsFor(fieldName).textContent).toEqual(value);
        });
    };

    const itAssignsAndIdThatMatchesTheLabelId = (formName, fieldName) => {
        it('assigns an id that matches label id for the field name', () => {
            render(<CustomerForm firstName="Ashley" />);
            expect(field(formName, fieldName).id).toEqual(fieldName);
        });
    };

    const itSubmitsExistingValue = (formName, fieldName, value) => {
        it('saves value when form submits', async () => {
            expect.hasAssertions();
            render(<CustomerForm {...{ [fieldName]: value }} onSubmit={(obj) => expect(obj[fieldName]).toEqual(value)} />);
            await ReactTestUtils.Simulate.submit(form(formName));
        });
    };

    const itSubmitsNewValue = (formName, fieldName, value) => {
        it('saves new value when form submits', async () => {
            expect.hasAssertions();
            render(<CustomerForm {...{ [fieldName]: value }} onSubmit={(obj) => expect(obj[fieldName]).toEqual(value)} />);
            await ReactTestUtils.Simulate.change(field(formName, fieldName), {
                target: { value }
            })
            await ReactTestUtils.Simulate.submit(form(formName));
        })
    }

    beforeEach(() => {
        ({ render, container } = createContainer());
    })

    it('renders a form', () => {

        render(<CustomerForm />);

        expect(form("customer")).not.toBeNull();
    })

    describe('First name field test', () => {
        itRendersAsTextBox('customer', 'firstName');
        itIncludesTheExistingValue('customer', 'firstName');
        itRendersALabelForFieldName('firstName', 'First Name');
        itAssignsAndIdThatMatchesTheLabelId('customer', 'firstName');
        itSubmitsExistingValue('customer', 'firstName', 'Ashley');
        itSubmitsNewValue('customer', 'firstName', 'James');
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
            })

            await ReactTestUtils.Simulate.submit(form('customer'));
        })

    });

})