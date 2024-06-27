import {
    Box,
    BoxProps,
    Button,
    FormGroup,
    H5,
    Input,
    Label,
    MadeWithLove,
    MessageBox,
    Text,
  } from '@adminjs/design-system'
  import { styled } from '@adminjs/design-system/styled-components'

  
  import React from 'react'
  import { useSelector } from 'react-redux'

  import {useTranslation, ReduxState } from 'adminjs'


export type LoginTemplateAttributes = {
    errorMessage?: string | null;
    action?: string;
    [name: string]: any;
  }
  
  const Wrapper = styled(Box)<BoxProps>`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  `
  
  const StyledLogo = styled.img`
    max-width: 200px;
    margin: ${({ theme }) => theme.space.md} 0;
  `
    
  export type LoginProps = {
    message?: string
    action: string
  }
  
  export const Login: React.FC = () => {
    const props = (window as any).__APP_STATE__ as LoginTemplateAttributes
    const { action, errorMessage: message } = props
    const { translateComponent, translateMessage } = useTranslation()
    const branding = useSelector((state: ReduxState) => state.branding)
  
    return (
      <Wrapper flex variant="grey" className="login__Wrapper">
        <Box bg="white" height="440px" flex boxShadow="login" width={[1, 2 / 3, 'auto']}>

          <Box
            as="form"
            action={action}
            method="POST"
            p="x3"
            flexGrow={1}
            width={['100%', '100%', '480px']}
          >
            <H5 marginBottom="xxl">
              {branding.logo ? (
                <StyledLogo src={branding.logo} alt={branding.companyName} />
              ) : (
                branding.companyName
              )}
            </H5>
            {message && (
              <MessageBox
                my="lg"
                message={message.split(' ').length > 1 ? message : translateMessage(message)}
                variant="danger"
              />
            )}
            <FormGroup>
              <Label required>Login</Label>
              <Input name="email" />
            </FormGroup>
            <FormGroup>
              <Label required>{translateComponent('Login.properties.password')}</Label>
              <Input
                type="password"
                name="password"
                autoComplete="new-password"
              />
            </FormGroup>
            <Text mt="xl" textAlign="center">
              <Button variant="contained">{translateComponent('Login.loginButton')}</Button>
            </Text>
          </Box>
        </Box>
        {branding.withMadeWithLove ? (
          <Box mt="xxl">
            <MadeWithLove />
          </Box>
        ) : null}
      </Wrapper>
    )
  }
  
  export default Login
  