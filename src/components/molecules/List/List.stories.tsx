import React from "react";

import { storiesOf } from "@storybook/react";

import List from "./List.component";

export const reposData = [
    {
        id: "1",
        html_url: 'www.google.com',
        name: 'Repo No1'
    },
    {
        id: "2",
        html_url: 'www.google.com',
        name: 'Repo No2'
    },
    {
        id: "3",
        html_url: 'www.google.com',
        name: 'Repo No3'
    },
];
storiesOf("List", module).add('defoult', ()=> (
    <List data={reposData} />
));