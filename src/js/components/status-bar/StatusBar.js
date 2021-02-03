import React from 'react';
import PropTypes from 'prop-types';
import './status-bar.scss';

const Bar = ({ actions, disabled, onAction, status }) => console.log("actions", actions) || 
    <div className={`status-bar ${status ? status.code : ''}`}>
        <div className="button-bar d-inline-block">
            {actions.map(a =>
                <button type="button" key={a.slug}
                    disabled={disabled}
                    data-toggle="tooltip" data-placement="top" title={a.label}
                    className={`btn btn-sm action-${a.slug}`}
                    onClick={() => onAction && onAction(a)}
                >
                    <i className={a.icon}></i>
                    <small className="hint">{a.label}</small>
                </button>
            )}
        </div>
        <div className="status d-inline-block">{status ? status.message : ''}</div>
    </div>;
Bar.propTypes = {
  status: PropTypes.object,
  disabled: PropTypes.bool,
  onAction: PropTypes.func,
  actions: PropTypes.array,
};
Bar.defaultProps = {
  status: '',
  actions: [],
  disabled: true,
  onAction: null
};
export default Bar;