interface Post {
  title: string;
  body: string;
  id?: number;
  comments?: Comment[];
}

interface Comment {
  id?: number;
  postId?: number;
  body: string;
}

interface PendingContent {
  body: string;
  title?: string;
  id?: number;
}

interface State {
  posts: Post[];
  pendingPost: PendingContent | null;
  pendingComments: PendingContent[];
  process: {
    loading: boolean;
    success: boolean;
    message: string;
  };
}

type Payload = {
  id: number | string;
  title?: string;
  body?: string;
};

type Remove = {
  id?: number;
};

type Action<T> = {
  type: string;
  payload: T;
};
