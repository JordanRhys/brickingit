import { styled } from 'styled-components';

const StyledFullWidth = styled.section`
  width: 100%;
  padding: ${({ withoutPadding, theme: { spacings } }) => withoutPadding ? spacings.none : spacings.md } 0;
`

export const FullWidth = ({ children }) => (
  <StyledFullWidth>
    {children}
  </StyledFullWidth>
);

const StyledFlexColumn = styled.section`
  width: ${({ width }) => width ? width : '100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ withoutPadding, theme: { spacings } }) => withoutPadding ? spacings.none : spacings.md } 0;
  margin: 0 auto;
  > * {
    margin-bottom: ${({ gap, theme: { spacings } }) => gap ? gap : spacings.md };
  }
`

export const FlexColumn = ({ children }) => (
  <StyledFlexColumn>
    {children}
  </StyledFlexColumn>
);
