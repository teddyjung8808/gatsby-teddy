import React, { FunctionComponent } from 'react'

import styled from '@emotion/styled'
import GlobalStyle from '@Components/Common/GlobalStyle'
import Introduction from '@Components/Main/Introduction'
import CategoryList from '@Components/Main/CategoryList'
import PostList from '@Components/Main/PostList'
import Footer from '@Components/Common/Footer'

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

export default IndexPage
