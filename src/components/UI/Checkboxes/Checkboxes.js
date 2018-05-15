import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

class Checkboxes extends Component {
    state = {
        isChecked: false
    }

    componentDidMount() {
        if (this.props.selectedAttendees) {
            if (this.props.selectedAttendees.indexOf(this.props.label) > -1) {
                this.setState({
                    isChecked: true
                })
            };
        }
    }

    toggleCheckboxChangeHandler = () => {
        const {
            handleCheckboxChange,
            label
        } = this.props;

        this.setState((prevState) => {
            return {
                isChecked: !prevState.isChecked
            }
        })

        handleCheckboxChange(label);
    }

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;

        return (
            <Aux>
                <input id={label}
                    type="checkbox"
                    value={label}
                    checked={isChecked}
                    name="details"
                    onChange={this.toggleCheckboxChangeHandler} />
                    <label htmlFor={label}>{label}</label>
            </Aux>
        )
    }
}

Checkboxes.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
}

export default Checkboxes;