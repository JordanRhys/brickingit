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
  ${({ centered }) => centered ? `justify-content: center;` : ''}
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
    ${({ withoutMargin, reverse, theme: { spacings }}) => withoutMargin ? '' : `
      margin-right: ${ reverse ? spacings.none : spacings.md };
      margin-left: ${ reverse ? spacings.md : spacings.none };
    `}
  }
`
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${props => props.theme.spacings.md};
  ${({ extraPadding, theme }) => extraPadding ? `padding-top: ${theme.spacings.lg}; margin-top: ${theme.spacings.md};` : ''}
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: #ffffff;
  :not(:last-child) {
    margin-right: ${props => props.theme.spacings.md};
  }
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.md};
  }
  > *:last-child {
    margin-top: auto;
  }
`
