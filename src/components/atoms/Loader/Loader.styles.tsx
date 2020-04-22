import styled from "styled-components";

export const Container = styled.div`
    .loader {
        border: 16px solid #f3f3f3;
        border-top: 16px solid green;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin: 20px auto;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;