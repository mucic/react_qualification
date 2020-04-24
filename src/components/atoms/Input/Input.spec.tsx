import React from "react";
import renderer from "react-test-renderer";

import Input from "./Input.component";

const inputData = {
    value: '',
    onChange: () => null
};
test("Input renders as expected", () => {
  const component = renderer.create(
    <Input {...inputData}/>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});