export type Tag = {
  label: string;
  value: string;
};

export interface Bookmark {
  id: string;
  url: string;
  title: string;
  author?: string;
  createdDate: Date;
  tags: Tag[];
  width: number;
  height: number;
  duration?: number;
}
