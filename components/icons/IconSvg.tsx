import styled from "styled-components";

export interface IconSvgProps {
    iconHeight?: string;
    iconWidth?: string;
    iconColor?: string;
}

export const IconSvg = styled.svg<IconSvgProps>`
  ${({iconHeight}) => iconHeight && `height: ${iconHeight}`};
  ${({iconWidth}) => iconWidth && `width: ${iconWidth}`};
  ${({iconColor}) => iconColor && `color: ${iconColor}`};
`;
