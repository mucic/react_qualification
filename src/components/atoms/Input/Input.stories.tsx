import React from "react";

import { storiesOf } from "@storybook/react";

import Input from "./Input.component";

storiesOf("Input", module).add('defoult', ()=> (
    <Input onChange= {() => null} placeholder="test"/>
));