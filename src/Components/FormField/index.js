import React from 'react';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
    position: relative; 
    width:100%;
`;

const Label = styled.label``;
Label.Text = styled.span`
  height: 90px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  font-weight: bold;
  
  transform-origin: 0% 0%;
  font-size: 16px;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
    width:100%;
    height: 60px;
    background-color: #f7f3f2;

    margin-top: 15px;
    border: 2px solid black;
    border-radius: 5px;
    font-weight: bold;
    border: 0px solid;
    padding-left: 20px;
    padding-top: 5px;
  
    
    border-radius: 4px;
    transition: border-color .3s;

    &:focus:not([type="color"]) + span {
        transform: scale(.8) translateY(-10px);
    }
    &focus:{
        border: 3px solid black;
        background-color: white;
    }
    
    ${({ hasValue }) => hasValue && css`
        &:not([type="color"]) + span {
            transform: scale(.8) translateY(-5px);
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
