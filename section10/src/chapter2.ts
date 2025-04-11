interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
};

type Pick<T, K extends keyof T> = {
  [key in K]: T[key]
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: 'old',
  content: 'old',
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
}

type Record<K extends keyof any, V> = {
  [key in K]: V;
}

type ThumbNail = Record<'large' | 'medium' | 'small' | 'watch', {url: string, size: number}>;