import React from "react";
import { CustomerForm } from "../src/components/CustomerForm";
import { createContainer } from "./domManipulators";

describe('Customer From', () => {

    let render, container;

    const form = id => container.querySelector(`form[id="${id}"]`);

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

        const field = form("customer").elements.firstName;

        expectToBeInputFieldOfTypeText(field);
    })

    it('includes the existing value for the first name', () => {
        render(<CustomerForm firstName="Ashley" />);

        const field = form("customer").elements.firstName;
        
        expect(field.value).toEqual('Ashley');
    })
})