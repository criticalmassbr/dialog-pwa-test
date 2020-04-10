import styled from 'styled-components';
import media from 'styled-media-query';

import * as C from './Constants';

function widthGrid(value) {
    if(!value)
        return;

    let width = value / C.NUMBER_COLUMN * 100;

    return `
        flex: 0 0 ${ width }%;
        width: ${ width }%;
        max-width: ${ width }%;
    `;
}

export const Container = styled.div`
    max-width: ${ C.CONTAINER_WIDTH }px;
    margin: 0 auto;
    padding: 0 ${ C.GUTTER_WIDTH/2 }px;

    &:before,
    &:after {
        content: "";
        display: table;
    }

    &:after {
        clear: both;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -${ C.GUTTER_WIDTH/2 }px;

    &.no-gutters{
        margin: 0 !important;
    }
`;

export const Col = styled.div`
    padding: 0 ${ C.GUTTER_WIDTH/2 }px;
    margin-bottom: 30px;

    &.no-margin {
        margin: 0;
    }

    &.no-padding{
        padding: 0;
    }
    
    ${({ general }) => general && widthGrid(general)}

    ${media.lessThan("medium")`
        ${({ mobile }) => mobile && widthGrid(mobile)}
    `}

    ${media.greaterThan("medium")`
        ${({ tablet }) => tablet && widthGrid(tablet)}
    `}

    ${media.greaterThan("1024px")`
        ${({ desktop }) => desktop && widthGrid(desktop)}
    `}
`;