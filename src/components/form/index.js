import React from 'react';
import PropTypes from 'prop-types';

import FormBuilder from 'js-form-builder';

import {
    FormContainer,
    GroupContainer,
    FieldGroupContainer,
    FieldContainer,
    FormErrorContainer,
    UploadImage,
    CheckBox,
} from '@src/forms/customContainers.jsx';

import { concatContainerToFields } from '@src/helpers/fields';

const SUBMIT_PROPS = {
    className: 'button form__submit',
};

const FIELDS_CONTAINER = {
    file: UploadImage,
    checkbox: CheckBox,
};

class Form extends React.Component {
    render() {
        const fields = concatContainerToFields(this.props.fields);

        // TODO refactor
        const FORM_ATTR = this.props.extraClassName
            ? { className: `form ${this.props.extraClassName}` }
            : { className: 'form' };

        return (
            <React.Fragment>
                {this.props.title
                    && <div className="form__title">
                        {this.props.title}
                    </div>
                }
                <FormBuilder
                    fields={fields}
                    initialState={this.props.initialState}
                    form={{ ...FORM_ATTR, encType: 'multipart/form-data' }}
                    submit={SUBMIT_PROPS}
                    submitButtonText={this.props.submitButtonLabel}
                    container={FormContainer}
                    groupContainer={GroupContainer}
                    fieldGroupContainer={FieldGroupContainer}
                    fieldContainer={FieldContainer}
                    fieldsContainers={FIELDS_CONTAINER}
                    formErrorContainer={FormErrorContainer}
                    onSuccess={this.props.onSuccess}
                    // onError={onError}
                    hasToSubmit={false}
                    showSubmitButton={true}
                    hasToShowLabel={true}
                    showFormErrorMessage={true}
                    setErrorOnChange={true}
                />
            </React.Fragment>
        );
    }
}

export default Form;


Form.propTypes = {
    initialState: PropTypes.obj,
    fields: PropTypes.array,
    onSuccess: PropTypes.func,
};

Form.defaultProps = {
    initialState: {},
    fields: [],
    onSuccess: () => { },
};
