import { message } from '@hankliu/hankliu-ui';
import fetch from 'isomorphic-fetch';
import { Base64 } from 'js-base64';

export interface IVideo {
  title: string;
  duration: number;
  durationFormat: string;
  width: number;
  height: number;
  accept: string[];
  url: string;
  cover?: string;
  blobUrl?: string;
}

export interface IVideoData {
  title: string;
  desc: string;
  cover: string;
  list: IVideo[];
}

export interface IMxnzpResponse<T> {
  code: number;
  msg: string;
  data: T;
}

/**
 * 获取获取解析后的 Bilibili 视频
 *
 * @returns
 */
export const fetchVideo = async (url: string): Promise<IVideoData> => {
  return fetch<IMxnzpResponse<IVideoData>>(
    ` https://www.mxnzp.com/api/bilibili/video?url=${Base64.encode(url)}&app_id=${process.env.MXNZPAPI_KEY}&app_secret=${process.env.MXNZPAPI_SECRET}`,
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((data) => {
      const result: IVideoData = data.data;
      for (const item of result?.list) {
        item.cover = result.cover;
      }
      return result;
    })
    .catch((error) => {
      console.log(error);
      message.error('请求数据失败');
    });
};
