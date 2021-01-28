import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

export const RightActionBar = styled.div`
  ${({
    theme: {
      metrics: { spacing },
      colors,
    },
  }) => css`
    padding: ${spacing[6]} ${spacing[6]} ${spacing[3]};
    background-color: inherit;
    width: 25%;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    position: relative;

    &:before {
      content: '';
      width: 1px;
      background-color: ${colors['ui-03']};
      position: absolute;
      left: 0;
      top: ${spacing[8]};
      bottom: ${spacing[8]};
      border-radius: 2px;
    }
  `}
`;

export const LeftActionBar = styled.div`
  ${({
    theme: {
      metrics: { spacing },
      colors,
      compact = false,
    },
  }) => css`
    padding: 0;
    background-color: inherit;
    width: 30%;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    position: relative;
    &:before {
      content: '';
      width: 1px;
      background-color: ${colors['ui-02']};
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 2px;
    }

    ${Media.giant`
      width: 40%;
    `}

    @media (min-width: 768px) and (max-width: 991.5px) {
      width: 100%;
      min-height: 100vh;
      &:before {
        content: '';
        display: none !important;
      }
    }

    ${Media.tablet`
      width: 100%;
      min-height: 100vh;
      &:before {
        content: '';
        display: none !important;
      }
    `}

    ${Media.phone`
      width: 100%;
      min-height: 100vh;
      &:before {
        content: '';
        display: none !important;
      }
    `}
  `}
`;

export const SegmentActionBar = styled.div`
  ${({
    theme: {
      metrics: { spacing },
      colors,
    },
  }) => css`
    padding: ${spacing[6]} 0;
    background-color: inherit;
    width: 15%;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    position: relative;
  `}
`;
