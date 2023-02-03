import React from 'react'
import Confirmation from '/confirmation'

describe('<Confirmation />', () => {
        it('displays confirmation message', () => {
            cy.mount(<Confirmation />);
            cy.get('[data-cy="confirmation_message"]').should("have.text", 
            "Your order is confirmed and will be delivered on DATE");
        })}
)