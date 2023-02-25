import React from "react";
import styled from "styled-components";

type Color = "Mono" | "Green" | "Red";

interface CircleButtonProps {
  /**
   * クリック可能か否か
   */
  canClick: boolean;
  /**
   * ボタン及び文字の色 "Mono" | "Green" | "Red"
   */
  color: Color;
  /**
   * ボタン内の文字
   */
  label: string;
  /**
   * onClickハンドラ
   */
  onClick?: () => void;
}

export const CircleButton = ({
  canClick,
  color,
  label,
  onClick,
}: CircleButtonProps) => {
  return (
    <Circle canClick={canClick} color={color} onClick={onClick}>
      <TextWrap color={color}>{label}</TextWrap>
    </Circle>
  );
};

type CircleProps = {
  canClick: boolean;
  color: Color;
};

type TextWrapProps = {
  color?: Color;
};

const Circle = styled.div<CircleProps>`
  display: flex;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  background-color: ${({ color }) =>
    color === "Mono"
      ? "rgb(51, 44, 57)"
      : color === "Green"
      ? "rgb(96, 158, 162)"
      : "rgb(201, 44, 109)"};
`;

const TextWrap = styled.div<TextWrapProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #f0eeed;
`;
