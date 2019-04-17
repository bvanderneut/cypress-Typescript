import { ProductGroup } from './../support';

describe('Verify Typescript works fine', () => {
    beforeEach(function () {
        cy.visit('/');
    });

    it('Check strongType', function () {
        strongType(1, 'a', true);
    });

    it('Check custom command', function () {
        cy.myCustomFunction('h1', 'Makkelijk zelf kiezen');
    });

    it('check enum', function () {
        const auto = ProductGroup.Auto;
        cy.log('My enum value is: ' + auto);
    });
});

function strongType(num: number, str: string, boo: boolean) {
    cy.log('Typescript works fine')
}