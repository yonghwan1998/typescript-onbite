interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
};

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: '제목 나중에 짓자',
  content: '초안,,,',
}

type Required<T> = {
  [key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
  title: '후기',
  tags: ['ts'],
  content: 'content',
  thumbnailURL: '',
}

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
  title: '보호',
  tags: ['ts'],
  content: 'content',
}