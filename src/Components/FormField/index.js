import React from 'react';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
    position: relative; 
`;

const Label = styled.label``;
Label.Text = styled.span`
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
    width:100%;
    height: 60px;
    background-color: lightgrey;

    margin-top: 15px;
    border: 2px solid black;
    border-radius: 5px;
    font-weight: bold;
    border: 0px solid;
  
    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
    }
    &focus:{
        border: 3px solid black;
        background-color: white;
    }
    
    ${({ hasValue }) => hasValue && css`
        &:not([type="color"]) + span {
            transform: scale(.6) translateY(-10px);
        }
    `}

`;
function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value.length);
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

export default FormField;
