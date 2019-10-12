
describe('Routes Test', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /login', () => {
		cy.get('nav a').contains('Login').click();
		cy.url().should('include', '/login');
	});

	it('navigates to /register', () => {
		cy.get('nav a').contains('Register').click();
		cy.url().should('include', '/register');
	});
});
