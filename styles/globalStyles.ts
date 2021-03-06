import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import normalize from 'styled-normalize';

const GlobalStyled = createGlobalStyle`
    ${normalize}
    ${reset}

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.text.normal};
    }

    body, button, input, textarea {
        font-family: ${({ theme }) => theme.font.family.roboto}, sans-serif;
        font-weight: ${({ theme }) => theme.font.weight.regular};
    }
`;

export default GlobalStyled;
