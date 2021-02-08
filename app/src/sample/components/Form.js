import React from 'react';

import { Field, reduxForm } from 'redux-form';

const Form = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="pt-2">ID</label>
                <input id="1"
                    type="text"
                    className="form-control"
                    value={props.id}
                    onChange={(e) => props.onChangeId(e)}
                />
                <label className="pt-2">Name</label>
                <input id="2"
                    type="text"
                    className="form-control"
                    value={props.name}
                    onChange={
                        (e) => props.onChangeName(e)
                    }
                />
            </div>
        </form>
    )
};
export default Form;