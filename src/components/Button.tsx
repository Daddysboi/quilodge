import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Loading from "./Loading";

import { primaryColors } from "../assets/Colors";

const Button = styled.button<AppButtonProps>`
  background-color: ${(props) => {
    switch (props.display) {
      case "success":
        return primaryColors.Green;
      case "grey":
        return primaryColors.Grey;
      case "other":
        return primaryColors.black;
      case "none":
        return "transparent";
      default:
        return primaryColors.Purple;
    }
  }};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  font-size: ${(props) => props.fontSize || "0.8rem"};
  font-weight: ${(props) => props.fontWeight || "400"};
  padding: ${(props) =>
    props.small ? "0.5rem 1rem" : props.noPaddng ? "0" : "0.5rem 2rem"};
  border-radius: 0.5rem;
  color: ${(props) => props.textColor || "#fff"};
  border: ${(props) => props.border || ""};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    /* background: transparent; */
    background-color: ${(props) => props.hoverBg || "#4D4D4D"};
  }

  // Disabled styles
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media only screen and (min-width: 320px) and (max-width: 580px) {
    font-size: ${(props) => "0.75rem"};
  }
`;

const Children = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

interface AppButtonProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  border?: string;
  hoverColor?: string;
  small?: boolean;
  noPaddng?: boolean;
  outline?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  icon?: React.ReactElement;
  display?: "success" | "grey" | "other" | "none";
  height?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  hoverBg?: string;
  id?: string;
  className?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  text,
  backgroundColor,
  textColor,
  border,
  hoverColor,
  small,
  noPaddng,
  outline,
  disabled = false,
  type,
  loading = false,
  onClick,
  icon,
  display,
  height,
  width,
  fontSize,
  fontWeight,
  hoverBg,
  id,
  className,
  children,
  ...props
}) => {
  return (
    <Button
      className={className}
      backgroundColor={backgroundColor}
      id={id}
      textColor={textColor}
      border={border}
      hoverColor={hoverColor}
      small={small}
      noPaddng={noPaddng}
      outline={outline}
      disabled={loading || disabled}
      type={type}
      onClick={onClick}
      height={height}
      width={width}
      fontSize={fontSize}
      fontWeight={fontWeight}
      display={display}
      hoverBg={hoverBg}
      {...props}
    >
      <Children>
        {icon && icon}
        {!loading ? text : <Loading color={primaryColors.White} />}
        {children}
      </Children>
    </Button>
  );
};

export default AppButton;
