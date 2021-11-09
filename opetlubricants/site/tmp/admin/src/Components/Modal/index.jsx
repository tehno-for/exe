import React from 'react';

import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './Modal.scss';

const Modal = ({show, dialogSize, headText, successText, dismissText,
                   noHeader, noFooter, noMaxHeight,
                   onSuccess, onDismiss,
                   children}) => {

    const modalClick = event => {
        if (event.target === event.currentTarget) {
            onDismiss();
        }
    };

    const successClick = event => {
        onSuccess();
    };

    return (
        <div className={classNames("modal", {active: show})} onMouseDown={modalClick}>
            <div className={classNames("modal-dialog", dialogSize)}>
                <div className="modal-content">
                    {!noHeader && <div className="modal-header">
                        <h4 className="modal-title">{headText}</h4>
                        <FontAwesomeIcon onClick={onDismiss} className="modal-close-btn" icon={faTimesCircle}/>
                    </div>}
                    <div className={classNames("modal-body", {"full-body": noMaxHeight})}>
                        {children}
                    </div>
                    {!noFooter && <div className="modal-footer">
                        {successText && <button className="btn btn-success mr-3" onClick={successClick}>{successText}</button>}
                        <button className="btn btn-dismiss" onClick={onDismiss}>{dismissText}</button>
                    </div>}
                </div>
            </div>
        </div>
    )
};

export default Modal;