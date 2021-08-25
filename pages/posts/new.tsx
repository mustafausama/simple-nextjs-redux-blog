import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Form, FormInput, FormLabel, FormTextArea } from '../../components/styled-components/Form';
import { Container, DarkButton } from '../../components/styled-components/Global';
import { addPendingPost, removePendingPost, addPost } from '../../redux/actionCreators';

interface CreatePostProps {
  pendingPost: any;
  addPendingPost: any;
  addPost: any;
}

const CreatePost: NextPage<CreatePostProps> = ({ pendingPost, addPendingPost, addPost }) => {
  const router = useRouter();
  const initState = pendingPost ? { body: '', title: '', ...pendingPost } : { body: '', title: '' };
  const [postData, setPostData] = useState<Post>(initState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
    addPendingPost(postData);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost(postData);
    router.push('/');
  };
  return (
    <Container>
      <Head>
        <title>Create new post</title>
      </Head>
      <Form onSubmit={handleSubmit}>
        <FormLabel>Title</FormLabel> <FormInput name="title" value={postData.title} onChange={handleInputChange} />
        <FormLabel>Body</FormLabel> <FormTextArea name="body" value={postData.body} onChange={handleInputChange} />
        <DarkButton type="submit">Add Post</DarkButton>
      </Form>
    </Container>
  );
};

const mapStateToProps = ({ main }: { main: State }) => ({
  pendingPost: main.pendingPost,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    removePendingPost: () => {
      dispatch(removePendingPost());
    },
    addPendingPost: (post: PendingContent) => {
      dispatch(addPendingPost(post));
    },
    addPost: (post: Post) => {
      dispatch(addPost(post));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
