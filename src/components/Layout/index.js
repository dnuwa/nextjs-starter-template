import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

export const Base = styled.div`
  background-color: ${({ theme }) => theme.colors['ui-background']};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  color: black;

  @media (min-width: 768px) and (max-width: 991.5px) {
    overflow: auto;
  }

  ${Media.tablet`
    overflow:auto;
  `}

  ${Media.phone`
      overflow:auto;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
`;

export const Segment = styled.div`
  ${({ theme: { colors } }) => css`
    background-color: ${colors['ui-background']};
    color: ${colors['text-01']};
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
  `}
`;

export const HSplit = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1 0 auto;

  @media (min-width: 768px) and (max-width: 991.5px) {
    flex-wrap: wrap;
  }

  ${Media.tablet`
      flex-wrap:wrap;
  `}

  ${Media.phone`
      flex-wrap:wrap;
  `}
`;

export const SplitContainer = styled.div`
  ${({
    theme: {
      colors,
      metrics: { spacing },
    },
  }) => css`
    padding: 0 ${spacing[6]} ${spacing[3]};
    display: flex;
    flex: 1;
    flex-direction: column;

    @media (min-width: 768px) and (max-width: 991.5px) {
      padding: 0 ${spacing[4]} ${spacing[3]};
    }

    ${Media.tablet`
    padding: 0 ${spacing[4]} ${spacing[3]};
    `}

    @media (min-width: 495px) and (max-width: 576px) {
      padding: 0 ${spacing[4]} ${spacing[3]};
    }

    ${Media.phone`
      padding: 0 ${spacing[4]} ${spacing[3]};
    `}
  `}
`;

export const SplitSegment = styled.div`
  ${({
    theme: {
      colors,
      metrics: { spacing },
    },
  }) => css`
    padding: ${spacing[6]} ${spacing[1]} ${spacing[3]};
    display: flex;
    flex: 1 0 100%;
    flex-direction: column;
  `}
`;

//   overflow-y: scroll;
//   overflow-x: hidden;
