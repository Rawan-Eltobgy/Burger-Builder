import React from 'react';
import Aux from '../../hoc/_Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div> ToolBar, SideFrawer, Backdrop </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);
export default layout;



