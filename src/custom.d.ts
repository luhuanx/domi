type RootState = {
  recordList: RecordItem[];
  createRecordError:Error | null;
  tagList: Tag[];
  currentTag?: Tag;
};
type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createAt?: string;
};
type Tag = {
  id: string;
  name: string;
};
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "success" | "duplicated";
  save: () => void;
  update: (id: string, name: string) => "success" | "duplicated" | "not found";
  remove: (id: string) => boolean;
};
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window {}
