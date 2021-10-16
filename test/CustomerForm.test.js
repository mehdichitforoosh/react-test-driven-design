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

})