import styled from 'styled-components';

export const FullWidth = styled.section`
  width: 100%;
  padding: ${({ withoutPadding, theme: { spacings } }) => withoutPadding ? spacings.none : spacings.md } 0;
`

export const FlexColumn = styled.section`
  width: ${({ width }) => width ? width : '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ centered }) => `justify-content: center;`}
  padding: ${({ withoutPadding, theme: { spacings } }) => withoutPadding ? spacings.none : spacings.md } 0;
  margin: 0 auto;
  > *:not(:last-child) {
    margin-bottom: ${({ gap, theme: { spacings } }) => gap ? gap : spacings.md };
  }
`

export const FlexRow = styled.section`
  width: ${({ width }) => width ? width : '100%'};
  display: flex;
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row' };
  justify-content: center;
  margin: 0 auto;
  padding: ${({ withoutPadding, theme: { spacings } }) => withoutPadding ? spacings.none : spacings.md } 0;
  > *:not(:last-child) {
    margin-right: ${({ reverse, theme: { spacings } }) => reverse ? spacings.none : spacings.md };
    margin-left: ${({ reverse, theme: { spacings } }) => reverse ? spacings.md : spacings.none };
  }
`
