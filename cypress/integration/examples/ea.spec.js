/// <reference types="Cypress" />

describe("Testing of EA App", () => {

	it("Login application", () => {
		cy.visit("http://eaapp.somee.com/");
		cy.contains("Login").click();

		cy.get("#UserName").type("admin");
		cy.get("#Password").type("password");

		cy.get("form").submit();
	})


	it("Change password", () => {
		cy.visit("http://eaapp.somee.com/");
		cy.contains("Login").click();

		cy.get("#UserName").type("admin");
		cy.get("#Password").type("password");

		cy.get("form").submit();

		cy.contains("Hello admin!").click();

		cy.contains("Change your password").click();
		cy.get("#OldPassword").type("password");
		cy.get("#NewPassword").type("thisIsTheNewPassword");
		cy.get("#ConfirmPassword").type("thisIsTheNewPassword");

		cy.get(".btn").click();
	})

	it("Login Change Log Off application", () => {
		cy.visit("http://eaapp.somee.com/");
		cy.contains("Login").click();

		cy.get("#UserName").type("admin");
		cy.get("#Password").type("password");

		cy.get("form").submit();

		cy.contains("Hello admin!").click();

		cy.contains("Change your password").click();
		cy.get("#OldPassword").type("password");
		cy.get("#NewPassword").type("thisIsTheNewPassword");
		cy.get("#ConfirmPassword").type("thisIsTheNewPassword");

		cy.get(".btn").click();

		cy.contains("Log off").click();

	})
	
	it("Login change logout login", () => {
		cy.visit("http://eaapp.somee.com/");
		cy.contains("Login").click();

		cy.get("#UserName").type("admin");
		cy.get("#Password").type("password");

		cy.get("form").submit();

		cy.contains("Hello admin!").click();

		cy.contains("Change your password").click();
		cy.get("#OldPassword").type("password");
		cy.get("#NewPassword").type("thisIsTheNewPassword");
		cy.get("#ConfirmPassword").type("thisIsTheNewPassword");

		cy.get(".btn").click();

		cy.contains("Log off").click();
		
		cy.contains("Login").click();

		cy.get("#UserName").type("admin");
		cy.get("#Password").type("thisIsTheNewPassword");

		cy.get("form").submit();
	})

})
