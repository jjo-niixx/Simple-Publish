import { css } from "styled-components";

const mixin = {
  input: (
    border = "1px solid #e1e4e8",
    borderRadius = "6px",
    boxShadow = "inset 0 1px 0 rgba(225,228,232,0.2)",
    backgroundColor = "#fafbfc",
    fontSize = "14px",
    lineHeight = "20px"
  ) => css`
    width: 100%;
    padding: 5px 12px;
    border: ${border};
    border-radius: ${borderRadius};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `,

  summary: (
    border = "1px solid rgba(27,31,35,0.15)",
    borderRadius = "6px",
    backgroundColor = "#fafbfc",
    fontWeight = "500",
    fontSize = "14px",
    lineHeight = "20px"
  ) => css`
    padding: 5px 16px;
    border: ${border};
    border-radius: ${borderRadius};
    background-color: ${backgroundColor};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `,

  button: (
    color = "hsla(0, 0%, 100%, 0.8)",
    backgroundColor = "#94d3a2",
    borderColor = "rgba(27, 31, 35, 0.1)",
    boxShadow = null
  ) => css`
    margin-top: 15px;
    padding: 5px 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border-radius: 6px;
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
  `,
};

export default mixin;
