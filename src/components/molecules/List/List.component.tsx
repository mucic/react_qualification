import React from 'react'
import * as Styled from "./List.styles";

interface ListProps {
    data: any[]
}

function List(props: ListProps) {

    const {data} = props;
    return (
        <Styled.Container>
                {data.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                ))}
        </Styled.Container>
    )
}

export default List
