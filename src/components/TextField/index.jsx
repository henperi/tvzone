import React from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  outline: none;
  border: unset;
  background-color: unset;
  font-size: 16px;
  flex: 3;
  margin: auto 2%;
  width: 100%;
`;

Input.defaultProps = {};

export const StyledTextField = styled.div.attrs((props) => ({
  className: props.className,
}))`
  background-color: ${(props) => (props.color)};
  border-radius: 12px;

  ${(props) => props.color
    && css`
      background-color: ${props.color};
    `};

  .icon {
    background-color: rgba(135, 108, 245, 0.178);
    border-radius: 12px;
    padding: 15px 20px;
    max-height: 50px;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const TextField = (props) => {
  const {
    leftIcon, rightIcon, color, ...inputProps
  } = props;

  return (
    <StyledTextField color={color} className="row row__mainAxis--spaceBetween">
      {leftIcon && <div className="icon">{leftIcon}</div>}
      <Input {...inputProps} />

      {rightIcon && <div className="icon">{rightIcon}</div>}
    </StyledTextField>
  );
};

TextField.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  color: PropTypes.string,
  accept: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  className: 'textField--container',
  type: 'text',
  placeholder: '',
  leftIcon: '',
  rightIcon: '',
  color: '#F4F4F4',
  accept: null,
  required: false,
  onChange: () => null,
  min: '',
  rows: 5,
  as: null,
  value: undefined,
  disabled: false,
};
