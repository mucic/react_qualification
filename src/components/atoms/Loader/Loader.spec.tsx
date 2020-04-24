import React from "react";
import renderer from "react-test-renderer";

import Loader from "./Loader.component";

test("Loader renders as expected", () => {
  const component = renderer.create(
    <Loader />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});