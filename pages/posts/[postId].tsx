import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, FormInput, FormLabel } from '../../components/styled-components/Form';
import { Container, DarkButton } from '../../components/styled-components/Global';
import {
  PostBody,
  PostDetailsHeading,
  PostHeader,
  VComment,
  VPostDetails,
} from '../../components/styled-components/Post';
import { addPendingComment, removePendingComment, removePost } from '../../redux/actionCreators';

export interface PostDetailsProps {
  post: Post;
  comments: Comment[];
  pendingComments: PendingContent[];
  addPendingComment: any;
  removePendingComment: any;
  removePost: any;
}

const PostDetails: NextPage<PostDetailsProps> = ({
  post,
  comments,
  pendingComments,
  addPendingComment,
  removePendingComment,
  removePost,
}) => {
  const router: NextRouter = useRouter();
  const pendingComment: PendingContent | undefined = pendingComments.find((comm) => comm.id === post.id);

  const [comment, setComment] = useState(pendingComment ? pendingComment.body : '');
  const [liveComments, setLiveComments] = useState(comments);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post('https://simple-blog-api.crew.red/comments', { postId: post.id, body: comment })
      .then((res) => {
        setLiveComments([...liveComments, res.data]);
        removePendingComment(post.id);
        setComment('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
    addPendingComment({ id: post.id, body: comment });
  };

  const handleDeletePost = () => {
    removePost(post.id);
    router.push('/');
  };

  const commentsView = liveComments.length ? (
    liveComments.map((comment) => (
      <VComment key={comment.id}>
        <p className="commentBody">{comment.body}</p>
      </VComment>
    ))
  ) : (
    <p>No comments...</p>
  );
  const postView = post ? (
    <>
      <PostHeader>
        <PostDetailsHeading>{post.title}</PostDetailsHeading>
        <DarkButton onClick={handleDeletePost}>Delete</DarkButton>
      </PostHeader>
      <PostBody>{post.body}</PostBody>
      <h2>Comments section</h2>
      {commentsView}
    </>
  ) : null;
  return (
    <Container>
      <Head>
        <title>Post: {post.title} </title>
      </Head>

      <VPostDetails>{postView}</VPostDetails>
      <Form onSubmit={handleSubmit}>
        <FormLabel>Comment</FormLabel>
        <FormInput type="text" value={comment} onChange={handleInputChange} />
        <DarkButton type="submit" style={{ display: 'block' }}>
          Submit
        </DarkButton>
      </Form>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let post: Post | undefined;
  let comments: Comment[] | undefined;
  try {
    const id: string = context.params?.postId as string;
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
    post = response.data;
    comments = post?.comments;
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      post: post ? post : null,
      comments: comments ? comments : [],
    },
  };
};

const mapStateToProps = ({ main }: { main: State }) => ({
  allPosts: main.posts,
  pendingComments: main.pendingComments,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    removePost: (id: number) => {
      dispatch(removePost(id));
    },
    addPendingComment: (comment: PendingContent) => {
      dispatch(addPendingComment(comment));
    },
    removePendingComment: (id: number) => {
      dispatch(removePendingComment(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
