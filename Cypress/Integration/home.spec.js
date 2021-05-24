import {
	homeUrl,
	headerText,
	footerText,
	tableTitle,
	filterBox,
	rowsPerPage,
	maxPage
} from '../../src/common/constants';

describe('Home Page', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.viewport('macbook-15');
		cy.url().should('eq', homeUrl);
	});

	it('Validation of Header Component', () => {
		cy.get('h6').contains(headerText);
	});

	it('Validation of Footer Component', () => {
		cy.get('h6').contains(footerText);
	});

	it('Validation of FilterBox Component', () => {
		cy.get('h6').contains(filterBox);
		cy.get('#filterBoxHeader-COUNT').contains('COUNT');
		cy.get('#filterBoxHeader-DISTINCT-VALUES').contains('DISTINCT-VALUES');
		cy.get('#filterBoxHeader-SELECT').contains('SELECT');
		cy.get('#toggleSwitch').should('be.disabled');
	});

	it('Validation of Table Component', () => {
		cy.get('h6').contains(tableTitle);
		cy.get('#tableHeader-Order-Id').contains('Order-Id');
		cy.get('#tableHeader-Online-Vendor').contains('Online-Vendor');
		cy.get('#tableHeader-Product').contains('Product');
		cy.get('#tableHeader-Category').contains('Category');
		cy.get('#tableHeader-Delivery-Status').contains('Delivery-Status');
		cy.get('[data-selectedcolumn=orderId]').should('have.length', rowsPerPage).should('not.be.empty');
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', rowsPerPage).should('not.be.empty');
		cy.get('[data-selectedcolumn=product]').should('have.length', rowsPerPage).should('not.be.empty');
		cy.get('[data-selectedcolumn=category]').should('have.length', rowsPerPage).should('not.be.empty');
		cy.get('[data-selectedcolumn=deliveryStatus]').should('have.length', rowsPerPage).should('not.be.empty');
	});

	it('Validation of Paginate Component', () => {
		cy.get('h6').contains(`Page - 1 of ${maxPage}`);
		cy.get('#nextPage').click({ force: true });
		cy.get('h6').contains(`Page - 2 of ${maxPage}`);
		cy.get('#prevPage').click({ force: true });
		cy.get('h6').contains(`Page - 1 of ${maxPage}`);
		cy.get('#lastPage').click({ force: true });
		cy.get('h6').contains(`Page - ${maxPage} of ${maxPage}`);
		cy.get('#firstPage').click({ force: true });
		cy.get('h6').contains(`Page - 1 of ${maxPage}`);
	});

	it('Validation of CellClick', () => {
		cy.get('#tData-Garment0').click({ force: true });
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 10);
		cy.get('#filterBoxData').find('#filterBoxData-Garment');
		cy.get('#filterBoxData').children().should('have.length', 1);
		cy.get('h6').contains(`Page - 1 of 2`);
		cy.get('#nextPage').click({ force: true });
		cy.get('h6').contains(`Page - 2 of 2`);
		cy.get('#prevPage').click({ force: true });
		cy.get('h6').contains(`Page - 1 of 2`);
	});

	it('Validation of Toggle Filter', () => {
		cy.get('#tData-Ajio-0').click({ force: true });
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('#toggleSwitch').click({ force: true });
		cy.get('h6').contains(`Page - 1 of ${maxPage}`);
		cy.get('#filterBoxData').should('be.empty');
		cy.get('#toggleSwitch').click({ force: true });
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('#filterBoxData').find('#filterBoxData-Ajio');
		cy.get('#filterBoxData').children().should('have.length', 5);
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 5);
		cy.get('h6').contains(`Page - 1 of 1`);
	});


	it('Validation of Table Filter', () => {
		cy.get('#tData-Garment0').click({ force: true });
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 1 of 2`);
		cy.get('[data-selectedtablefilter="4"]').click({ force: true });
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('#filterBoxData').children().should('have.length', 3);
		cy.get('#filterBoxData-transit').contains('transit');
		cy.get('#filterBoxData-delivered').contains('delivered');
		cy.get('#filterBoxData-dispatched').contains('dispatched');

		cy.get('#checkbox-dispatched').click({force:true})
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 6);
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 1 of 1`);
		cy.get('#checkbox-delivered').click({force:true})
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 4);
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 1 of 1`);
		cy.get('#checkbox-transit').click({force:true})
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 9);
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 1 of 1`);
		cy.get('[data-selectedtablefilter="2"]').click({ force: true });

		cy.get('#checkbox-Trousers').click({force:true});
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 1 of 1`);
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 4);

		cy.get('[data-selectedtablefilter="1"]').click({ force: true });
		cy.get('#checkbox-Ajio').click({force:true});
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 2);
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 1 of 1`);
		cy.get('#checkbox-Amazon').click({force:true});
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 1);
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 1 of 1`);
		cy.get('#checkbox-Myntra').click({force:true});
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 1);
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 1 of 1`);
		cy.get('#checkbox-Wallmart').click({force:true});
		cy.get('[data-selectedcolumn=onlineVendor]').should('not.exist');
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 0 of 0`);
		cy.get('#toggleSwitch').click({ force: true });
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 1 of ${maxPage}`);
		cy.get('[data-selectedcolumn=onlineVendor]').should('have.length', 30);
		cy.get('#toggleSwitch').click({ force: true });
		cy.get('#toggleSwitch').should('not.be.disabled');
		cy.get('h6').contains(`Page - 0 of 0`);
		cy.get('[data-selectedcolumn=onlineVendor]').should('not.exist');
		cy.get('#filterBoxData').children().should('have.length', 5);
	});

});
