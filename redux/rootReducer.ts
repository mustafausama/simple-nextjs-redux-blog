import { combineReducers } from 'redux';
import * as t from './actionTypes';

export const initialState: State = {
  posts: [],
  pendingPost: null,
  pendingComments: [],
  process: {
    loading: true,
    success: false,
    message: '',
  },
};

const main = (state = initialState, action: Action<Payload | Post[] | PendingContent | Remove | boolean | string>) => {
  if (action.type === t.ADD_ALL_POSTS) {
    return {
      ...state,
      posts: action.payload,
    };
  }

  if (action.type === t.ADD_POST) {
    const { posts } = state;
    posts.push(action.payload as Post);
    return {
      ...state,
      posts,
    };
  }

  if (action.type === t.REMOVE_POST) {
    const posts = state.posts.filter((post) => post.id !== (action.payload as Payload).id);
    return {
      ...state,
      posts,
    };
  }

  if (action.type === t.ADD_PENDING_POST) {
    return {
      ...state,
      pendingPost: action.payload as PendingContent,
    };
  }

  if (action.type === t.REMOVE_PENDING_POST) {
    return {
      ...state,
      pendingPost: null,
    };
  }

  if (action.type === t.ADD_PENDING_COMMENT) {
    const { pendingComments } = state;
    const pendingExists: number = pendingComments.findIndex(
      (comm) => comm.id === (action.payload as PendingContent).id,
    );
    if (pendingExists >= 0) pendingComments[pendingExists] = action.payload as PendingContent;
    else pendingComments.push(action.payload as PendingContent);
    return {
      ...state,
      pendingComments,
    };
  }

  if (action.type === t.REMOVE_PENDING_COMMENT) {
    const pendingComments = state.pendingComments.filter(
      (comment) => comment.id !== (action.payload as PendingContent).id,
    );
    return {
      ...state,
      pendingComments,
    };
  }

  /*if (action.type === t.SET_LOADING) {
    return {
      ...state,
      process: {
        ...state.process,
        loading: action.payload,
      },
    };
  }

  if (action.type === t.SET_STATUS_SUCCESS) {
    return {
      ...state,
      process: {
        success: true,
        message: (action.payload as Payload).id,
      },
    };
  }

  if (action.type === t.SET_STATUS_FAILURE) {
    return {
      ...state,
      process: {
        success: false,
        message: (action.payload as Payload).id,
      },
    };
  }*/

  return state;
};

const rootReducer = combineReducers({
  main,
});

export default rootReducer;
