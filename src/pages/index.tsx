import React, { FunctionComponent } from 'react'

import styled from '@emotion/styled'
import GlobalStyle from '@Components/Common/GlobalStyle'
import Footer from '@Components/Common/Footer'
import Introduction from '@Components/Main/Introduction'

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export default IndexPage
