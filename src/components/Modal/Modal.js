import React from 'react';

import './Modal.css';
import { Transition } from 'react-transition-group';

const modal = (props) => {


    return (
        <Transition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={300}>


            {state => {
                const cssClasses = [
                    'Modal',
                    state === 'entering'
                        ? 'ModalOpen'
                        : state === 'exiting' ? 'ModalClosed' : null
                ];

                return (
                    <div div className={cssClasses.join(' ')} >
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>
                            Dismiss
                        </button>
                    </div>
                )
            }}


        </Transition >
    )
};

export default modal;