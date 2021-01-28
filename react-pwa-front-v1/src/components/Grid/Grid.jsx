import React from 'react';

import './Grid.css'


const Grid = (props) => {
    const { sm, md, lg, xl, xll, children } = props;
    return (
        <div className={'col '
            + (sm ? `cols-sm-${sm} ` : '')
            + (md ? `cols-md-${md} ` : '')
            + (lg ? `cols-lg-${lg} ` : '')
            + (xl ? `cols-xl-${xl} ` : '')
            + (xll ? `cols-xll-${xll} ` : '')
        }>
            {children}
        </div>
    );
}

export default Grid;
