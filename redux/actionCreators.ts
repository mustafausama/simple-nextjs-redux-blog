import axios from 'axios';
import * as t from './actionTypes';

export const addAllPosts = (posts: Post[]): Action<Post[]> => ({
  type: t.ADD_ALL_POSTS,
  payload: posts,
});

export const __addPost = (post: Post): Action<Post> => ({
  type: t.ADD_POST,
  payload: post,
});

export const __removePost = (id: number): Action<Payload> => ({
  type: t.REMOVE_POST,
  payload: {
    id,
  },
});

export const addPendingPost = (post: PendingContent): Action<PendingContent> => ({
  type: t.ADD_PENDING_POST,
  payload: post,
});

export const removePendingPost = (): Action<Remove> => ({
  type: t.REMOVE_PENDING_POST,
  payload: {},
});

export const addPendingComment = (comment: PendingContent): Action<PendingContent> => ({
  type: t.ADD_PENDING_COMMENT,
  payload: comment,
});

export const removePendingComment = (id: number): Action<Remove> => ({
  type: t.REMOVE_PENDING_COMMENT,
  payload: { id },
});

/*export const setLoading = (loading: boolean): Action<boolean> => ({
  type: t.REMOVE_PENDING_COMMENT,
  payload: loading,
});

export const setStatusSuccess = (msg: string): Action<string> => ({
  type: t.REMOVE_PENDING_COMMENT,
  payload: msg,
});

export const setStatusFailure = (msg: string): Action<string> => ({
  type: t.REMOVE_PENDING_COMMENT,
  payload: msg,
});*/

export const removePost = (id: number) => {
  return (dispatch: any) => {
    axios
      .delete(`https://simple-blog-api.crew.red/posts/${id}`)
      .then((res) => {
        dispatch(__removePost(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addPost = (postData: Post) => {
  return (dispatch: any) => {
    axios
      .post('https://simple-blog-api.crew.red/posts', postData)
      .then((res) => {
        removePendingPost();
        dispatch(__addPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
