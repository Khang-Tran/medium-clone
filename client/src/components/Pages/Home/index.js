import React from 'react';
import styled from 'styled-components';
import KeyLinks from './components/KeyLinks';
import NavigationBar from './components/NavigationBar';
import NewsFeed from './components/NewsFeed';
import PopularPosts from './components/PopularPosts';
import PostTags from './components/PostTags';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: [popular-start] 1fr [popular-end] 2fr [feed-end] 1fr [tag-end];
  grid-template-rows: [nav-start] 1.25fr [nav-end] 4fr [link-start] 1fr [link-end];
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
`;

const Home = () => (
  <Container>
    <GridContainer>
      <NavigationBar/>
      <PopularPosts/>
      <NewsFeed/>
      <PostTags/>
      <KeyLinks/>
    </GridContainer>
  </Container>
);

export default Home;
