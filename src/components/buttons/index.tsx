import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const buttonStyle = css`
  display: inline-block;
  position: relative;
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  border-radius: ${(props) => props.theme.RADIUS};
  transition: background-color 0.1s ease-out;

  &:hover {
    color: #fff;
  }
`;

const primaryButton = css`
  ${buttonStyle};

  border: 1px solid ${(props) => props.theme.colors.PRIMARY_COLOR};
  color: ${(props) => props.theme.colors.PRIMARY_COLOR};

  &:hover {
    border-color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    background-color: ${(props) => props.theme.colors.PRIMARY_COLOR};
    color: #fff;
  }
`;

const secondaryButton = css`
  ${buttonStyle};

  border: 1px solid ${(props) => props.theme.colors.GREY_DARK};
  color: ${(props) => props.theme.colors.GREY_DARK};

  &:hover {
    border-color: ${(props) => props.theme.colors.GREY_DARK};
    background-color: ${(props) => props.theme.colors.GREY_DARK};
  }
`;

export const ButtonLink = styled(Link)`
  ${primaryButton}
`;

export const Button = styled.button<{ secondary?: boolean; disabled?: boolean }>`
  ${(props) => (props.secondary ? secondaryButton : primaryButton)}
`;

export const PreviousButton = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.GREY_DARK};
  padding: 0;
  margin: 0 auto 0 0;
`;
