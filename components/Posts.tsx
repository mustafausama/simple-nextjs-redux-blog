import Link from 'next/link';
import { Button } from './styled-components/Global';
import { PostCard, PostCardFooter, PostCardFooterText, PostCardText, PostsWrapper } from './styled-components/Posts';
import styles from '../styles/Posts.module.css';

export interface PostsProps {
  posts: Post[];
  removePost: { (id: number): void };
}

const Posts: React.SFC<PostsProps> = ({ posts, removePost }) => {
  const postsView = posts.length ? (
    posts.map((post) => (
      <PostCard key={post.id}>
        <Link href={'/posts/' + post.id}>
          <a className={styles.postTitle}>
            <h1>{post.title}</h1>
          </a>
        </Link>

        <PostCardText>{post.body.substring(0, 50)}</PostCardText>
        <PostCardFooter>
          <PostCardFooterText>{post.comments?.length || '0'} Comments</PostCardFooterText>
          <Button
            onClick={(e) => {
              removePost(post.id as number);
            }}
          >
            Remove
          </Button>
        </PostCardFooter>
      </PostCard>
    ))
  ) : (
    <p>No posts found...</p>
  );

  return <PostsWrapper>{postsView}</PostsWrapper>;
};

export default Posts;
