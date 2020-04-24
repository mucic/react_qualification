import React from "react";
import renderer from "react-test-renderer";

import { reposData } from "./List.stories";

import List from "./List.component";

test("List renders as expected", () => {
  const component = renderer.create(
    <List data={reposData} />
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});