import styled from 'styled-components';
import { Header, Body } from './typography';
import { breakpoints } from '../styles/breakpoints';

export const Outer = styled.main`
  width: 100%;
  margin: 0 auto;

  @media only screen and ${breakpoints.lg} {
    width: 1000px;
  }
`

export const FullWidth = styled.section`
  width: 100%;
  padding: ${({ withoutPadding, theme: { spacings } }) => withoutPadding ? spacings.none : spacings.md } 0;
`

export const FlexColumn = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ centered }) => centered ? `justify-content: center;` : ''}
  padding: ${({ withoutPadding, theme: { spacings } }) => withoutPadding ? spacings.none : spacings.md } 0;
  margin: 0 auto;
  > *:not(:last-child) {
    margin-bottom: ${({ gap, theme: { spacings } }) => gap ? gap : spacings.md };
  }
  ${Header} {
    color: ${props => props.theme.colors.primary};
  }
  ${Body} {
    color: ${props => props.theme.colors.body};
  }

  @media only screen and ${breakpoints.mdlg} {
    width: ${({ width }) => width ? width : '100%'};
    :only-child {
      min-width: 75%;
    }
  }

  @media only screen and ${breakpoints.lg} {
    :only-child {
      min-width: 50%;
    }
  }
`

export const ContrastFlexColumn = styled(FlexColumn)`
  background-color: ${props => props.theme.colors.primary};
  ${Header} {
    color: ${props => props.theme.colors.background};
  }
  ${Body} {
    color: ${props => props.theme.colors.background};
  }
`

export const FlexRow = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -${props => props.theme.spacings.md} auto 0 auto;
  padding: ${({ withoutPadding, theme: { spacings } }) => withoutPadding ? spacings.none : spacings.md } 0;
  flex-wrap: wrap;
  > * {
    margin-top: ${props => props.theme.spacings.md};
  }
  ${Header} {
    color: ${props => props.theme.colors.primary};
  }
  ${Body} {
    color: ${props => props.theme.colors.body};
  }

  @media only screen and ${breakpoints.smmd} {
    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row' };
  }

  @media only screen and ${breakpoints.md} {
    > *:not(:last-child) {
      ${({ withoutMargin, reverse, theme: { spacings }}) => withoutMargin ? '' : `
        margin-right: ${ reverse ? spacings.none : spacings.md };
        margin-left: ${ reverse ? spacings.md : spacings.none };
      `}
    }
    width: ${({ width }) => width ? width : '100%'};
    ${({ wrap }) => wrap ? 'flex-wrap: wrap;' : 'flex-wrap: nowrap;'}
  }
`

export const ContrastFlexRow = styled(FlexRow)`
  background-color: ${props => props.theme.colors.primary};
  ${Header} {
    color: ${props => props.theme.colors.background};
  }
  ${Body} {
    color: ${props => props.theme.colors.background};
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
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spacings.md};
  }
  > button:last-child {
    margin-top: auto;
  }
  ${({ hasCaption, theme }) => hasCaption ? `margin-top: ${theme.spacings.lg}` : ''};
  ${Header} {
    color: ${props => props.theme.colors.primary};
  }
  ${Body} {
    color: ${props => props.theme.colors.body};
  }

  @media only screen and ${breakpoints.smmd} {
    margin-top: 0px;
    :not(:last-child) {
      margin-right: ${props => props.theme.spacings.md};
    }
  }

  @media only screen and ${breakpoints.lg} {
    ${({ maxWidth }) => maxWidth ? `max-width: ${maxWidth};` : ''}
  }
`
