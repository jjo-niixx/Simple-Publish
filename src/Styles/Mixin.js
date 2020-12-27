import { css } from "styled-components";

const mixin = {
  input: (
    width = "100%",
    padding = "5px 12px",
    border = "1px solid #e1e4e8",
    borderRadius = "6px",
    boxShadow = "inset 0 1px 0 rgba(225,228,232,0.2)",
    backgroundColor = "#fafbfc",
    fontSize = "14px",
    lineHeight = "20px"
  ) => css`
    width: ${width};
    padding: ${padding};
    border: ${border};
    border-radius: ${borderRadius};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `,
};

export default mixin;
