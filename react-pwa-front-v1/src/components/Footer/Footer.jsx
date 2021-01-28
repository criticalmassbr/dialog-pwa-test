import React from 'react';

import styled from 'styled-components'

const Footer = styled.footer`
    position: static;
    bottom: 0;
    height: 25px;
    padding: 0px 15px;
    grid-column: 1 / -1;
    margin-bottom:30px;
`
const FooterParagraph = styled.p`
    font-size: 15px;
    line - height: 25px;
`

export default (props) => {
    return (
        <Footer>
            <FooterParagraph>Sample Footer for Dialog sample test PWA Application</FooterParagraph>
        </Footer>
    );
}

