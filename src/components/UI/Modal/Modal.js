import React from 'react';
import classes from './Modal.css';
import Aox from  '../../../hoc/Aox';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aox>
        <Backdrop show={props.show}
            clicked={props.modalClosed}/>
        <div
            className={classes.Modal}
            style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)'}}>
            {props.children}
        </div>
    </Aox>
    );

export default modal;