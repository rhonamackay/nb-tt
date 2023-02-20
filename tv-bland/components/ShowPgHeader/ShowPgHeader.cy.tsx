import React from "react";
import ShowPgHeader from "./ShowPgHeader";

describe("<ShowPgHeader />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ShowPgHeader />);
  });
});
