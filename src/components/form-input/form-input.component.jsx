import React from 'react';

import {GroupContainer,
        FormInputContainer,
        FormInputLabel
} from './form-input.styles'

const FormInput = ({handleChange, lable, ...otherProps}) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            lable ?
            (<FormInputLabel className={otherProps.value.length ? 'shrink' : '' }>
                {lable}
            </FormInputLabel>)
            : null
        }
    </GroupContainer>
)

export default FormInput;