Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Login", () => {
  const email = "user@gmail.com";
  const password = "password";

  it("Form Inputan Terisi Sempurna", () => {
    cy.visit("https://newwebionid.000webhostapp.com/login.php");
    cy.get("#username-field > .form_login").type(email);
    cy.get("#password").type(password);
    cy.get(".btn").click();
  });
});

describe("Ajukan Mentor", () => {
  const biodata = "Like games";
  const last_degree = "d4";
  const occupation = "none";
  const bukti_ijazah = "cypress/fixtures/Owl.jpg";
  const image2 = "cypress/fixtures/Owl.jpg";
  const bukti_ijazah_small = "cypress/fixtures/Owl.jpg";
  const image2_small = "cypress/fixtures/Owl.jpg";
  it("Form Inputan Terisi Sempurna", () => {
    cy.get(".sidebarCollapse").click();
    cy.get(".menu-extras > .dropdown-toggle").click();
    cy.get("#more > :nth-child(1) > a").click();
    cy.get(".modal-body > :nth-child(1) > .form-control").type(biodata);
    cy.get('#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(2) > .form-control').type(last_degree);
    cy.get("#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(3) > .form-control").type(occupation);
    cy.get("input[type=file]").selectFile(bukti_ijazah_small, { force: true });
    cy.get("input[type=file]").selectFile([image2_small, { force: true }]);
    cy.get(".btn-primary").click();
  });

  it("Form Inputan Tidak Terisi", () => {
    cy.get(".sidebarCollapse").click();
    cy.get(".menu-extras > .dropdown-toggle").click();
    cy.get("#more > :nth-child(1) > a").click();
    cy.get(".modal-body > :nth-child(1) > .form-control").type("");
    cy.get(
      "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(2) > .form-control"
    ).type("");
    cy.get(
      "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(3) > .form-control"
    ).type("");
    cy.get(
      ":nth-child(4) > .input-group > .custom-file > .form-control"
    ).selectFile([""]);
    cy.get(
      "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(5) > .input-group > .custom-file > .form-control"
    ).selectFile([""]);
    cy.get(".btn-primary").click();
  });

  it("Form Inputan Terisi Dengan Data File yang Cukup Besar", () => {
    cy.get(".sidebarCollapse").click();
    cy.get(".menu-extras > .dropdown-toggle").click();
    cy.get("#more > :nth-child(1) > a").click();
    cy.get(".modal-body > :nth-child(1) > .form-control").type(biodata);
    cy.get(
      "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(2) > .form-control"
    ).type(last_degree);
    cy.get(
      "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(3) > .form-control"
    ).type(occupation);
    cy.get(
      ":nth-child(4) > .input-group > .custom-file > .form-control"
    ).selectFile([bukti_ijazah]);
    cy.get(
      "#ajukanMentorModal > .modal-dialog > .modal-content > .form-vertical > .modal-body > :nth-child(5) > .input-group > .custom-file > .form-control"
    ).selectFile([image2]);
  });

});
