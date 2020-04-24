import React from "react";
import renderer from "react-test-renderer";

import Page from "./Page.component";

test("Page renders as expected", () => {
  const component = renderer.create(
    <Page>
        <p>Test page content</p>
    </Page>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});