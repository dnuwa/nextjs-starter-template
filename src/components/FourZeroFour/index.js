import styled, { css } from 'styled-components';
// import { transparentize } from 'polished';

export const Container = styled.div.attrs(() => ({
  className: ``,
}))`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors['ui-05']};
    margin: auto;
  `}
`;

export const TitleRow = styled.div.attrs(() => ({
  className: ``,
}))`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  `}
`;

export const HelperRow = styled.div.attrs(() => ({
  className: ``,
}))`
  ${({
    theme: {
      colors,
      metrics: { spacing },
    },
  }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin-top: ${spacing[5]};
  `}
`;

export const StatusCode = styled.p`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font },
      },

      colors,
    },
  }) => css`
    margin: 0 ${spacing[5]};
    font-family: ${font['condensed']};
    font-size: ${size['06']};
    font-weight: bold;
    color: ${colors['text-01']};
    position: relative;
    &:after {
      position: absolute;
      content: '';
      width: 1px;
      top: -10px;
      bottom: -10px;
      right: -20px;
      background-color: ${colors['ui-02']};
    }
  `}
`;

export const StatusTitle = styled.p`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },

      colors,
    },
  }) => css`
    padding: 0 ${spacing[3]};
    margin: 0;
    font-family: ${font['condensed']};
    font-size: ${size['06']};
    font-weight: ${weight['regular']};
    color: ${colors['text-01']};
  `}
`;

export const StatusHelper = styled.p`
  ${({
    theme: {
      metrics: {
        spacing,
        text: { size, font, weight },
      },

      colors,
    },
  }) => css`
    padding: 0 ${spacing[3]};
    margin: 0 ${spacing[8]};
    font-family: ${font['condensed']};
    font-size: ${size['03']};
    font-weight: ${weight['light']};
    color: ${colors['text-01']};
    text-align: center;
  `}
`;
