import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';
import { addAllPosts, removePost } from '../redux/actionCreators';

import axios from 'axios';

import { useEffect } from 'react';
import { Container } from '../components/styled-components/Global';
import Posts from '../components/Posts';
interface HomeProps {
  posts: Post[];
  allPosts: Post[];
  addAllPosts: any;
  removePost: any;
}

const Home: NextPage<HomeProps> = ({ posts, allPosts, addAllPosts, removePost }) => {
  useEffect(() => {
    addAllPosts(posts);
  }, []);

  return (
    <Container>
      <Head>
        <title>Blog posts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts posts={allPosts} removePost={removePost} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let posts: Post[] | undefined;
  try {
    const response = await axios.get('https://simple-blog-api.crew.red/posts?_embed=comments');
    posts = response.data;
  } catch (err) {
    console.log(err);
  }
  return {
    props: { posts: posts ? posts : [] },
  };
};

const mapStateToProps = ({ main }: { main: State }) => ({
  allPosts: main.posts,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addAllPosts: (posts: Post[]) => {
      dispatch(addAllPosts(posts));
    },
    removePost: (id: number) => {
      dispatch(removePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
