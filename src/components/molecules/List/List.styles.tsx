import styled from "styled-components";

export const Container = styled.ul`
    width: 100%;
    max-width: 400px;
    list-style: none;
    li {
        margin-bottom: 5px;
        a {
            color: #e30b5d;
            font-family: sans-serif;
            text-decoration: none;
            font-weight: bold;
        }
        &:before {
            content: '\\2713';
            color: #009688;
            font-weight: bold;
            display: inline-block;
            margin-left: -1em;
            width: 1em;
            padding: 10px;
        }
    }
`;