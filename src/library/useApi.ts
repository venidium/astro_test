import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSListResponse,
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Cats = {
  title: string;
  date: string;
  image: {
    fieldId: string;
    image: MicroCMSImage;
    alt: string;
  };
  category: string[];
  content: string;
};
export type CatsResponse = MicroCMSListResponse<Cats>;

// clientの作成
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// "cats" APIからデータを取得する関数
export const getCats = async (queries?: MicroCMSQueries) => {
  return await client.get<CatsResponse>({ endpoint: "blog", queries });
};

// "cats" APIからIDを指定して個別データを取得する関数
export const getCat = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Cats>({
    endpoint: 'blog',
    contentId,
    queries,
  });
};