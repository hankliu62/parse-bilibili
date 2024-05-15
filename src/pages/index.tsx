import AOS from 'aos';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Card,
  Skeleton,
  Tooltip,
  Table,
  Breadcrumb,
  Button,
  Input,
  VideoPlayer,
  message,
  HlImage,
} from '@hankliu/hankliu-ui';
import {
  VideoCameraFilled,
  InfoCircleOutlined,
  LinkOutlined,
  FileImageOutlined,
} from '@hankliu/icons';
import type { ColumnsType } from '@hankliu/hankliu-ui/lib/table';
import { useRouter } from 'next/router';
import { fetchVideo } from '@/services/frontend';
import type { IVideoData } from '@/services/frontend';
import { PageTitle } from '@/constants';
import useBreadcrumb from '@/hooks/useBreadcrumb';

/**
 * 解析 Bilibili 视频
 *
 * @returns
 */
export default function Index() {
  const [url, setUrl] = useState<string>();
  const [fetching, setFetching] = useState<boolean>(false);
  const [videoData, setVideoData] = useState<IVideoData>();
  const router = useRouter();

  /**
   * 解析视频
   */
  const onParseVideo = useCallback(async () => {
    if (!url) {
      message.error('请输入视频地址');
      return;
    }

    setFetching(true);
    const response = await fetchVideo(url);
    setVideoData(response);
    setFetching(false);
  }, [url]);

  const videoColumns = useMemo<ColumnsType<any>>(() => {
    return [
      {
        title: '视频名称',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '视频封面',
        dataIndex: 'cover',
        key: 'cover',
        render: (text, record) => (
          <HlImage
            src={record.cover}
            width={80}
            height={80}
            onClick={() => window.open(record.cover)}
            className="cursor-pointer"
          />
        ),
      },
      {
        title: '视频时长',
        dataIndex: 'durationFormat',
        key: 'durationFormat',
      },
      {
        title: '清晰度',
        dataIndex: 'accept',
        key: 'accept',
        render: (text) => text?.join('、'),
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <Button
              type="link"
              href={record.url}
              download={record.url.split('?')?.[0]?.split('/')?.pop() || record.title + '.mp4'}
            >
              下载视频
            </Button>
          );
        },
      },
    ];
  }, []);

  // 点击面包屑
  const onClickBreadcrumb = useBreadcrumb();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full text-white/75">
      {!!router.query?.['with-breadcrumb'] && (
        <Breadcrumb className="!m-6 !text-base" separator="/">
          <Breadcrumb.Item>
            <a onClick={onClickBreadcrumb}>小工具集合</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{PageTitle.split('-').pop().trim()}</Breadcrumb.Item>
        </Breadcrumb>
      )}

      <div className="relative z-20 mx-auto mt-6 w-full max-w-[1920px]">
        <div className="flex flex-col flex-wrap">
          {/* Bilibili 链接 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in"
          >
            <Card bordered className="relative shadow-lg">
              <Tooltip title="Bilibili 链接">
                <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                  <LinkOutlined className="text-[20px] text-white" />
                </div>
              </Tooltip>
              <div className="relative flex flex-col pt-4">
                <div className="flex flex-col justify-start">
                  <div className="flex items-center justify-start">
                    <label className="mr-4 text-xl font-medium">Bilibili 链接</label>
                  </div>
                  <div className="mt-2 w-full">
                    <Input
                      size="medium"
                      value={url}
                      onChange={(e) => {
                        setUrl(e.target.value);
                      }}
                      placeholder="请输入 Bilibili 链接"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col items-start justify-center">
                  <Button
                    loading={fetching}
                    disabled={fetching}
                    size="medium"
                    type="primary"
                    onClick={onParseVideo}
                  >
                    开始处理
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* 播放视频 */}
          {!!videoData && (
            <div className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in">
              <Card bordered className="relative shadow-lg">
                <Tooltip title="播放视频">
                  <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                    <VideoCameraFilled className="text-[20px] text-white" />
                  </div>
                </Tooltip>
                <div className="relative flex flex-col pt-4">
                  {fetching ? (
                    <Skeleton className="w-full" active />
                  ) : (
                    <div className="mb-4 flex w-full flex-col">
                      <div className="mb-2">
                        <div className="text-2xl font-medium">{videoData?.title}</div>
                        <div className="mt-1 text-sm opacity-60 empty:hidden">
                          {videoData?.desc}
                        </div>
                      </div>

                      <div className="mb-2 flex items-center justify-center text-lg">
                        <VideoPlayer
                          className="overflow-hidden rounded"
                          source={videoData?.list?.[0]?.url}
                          width={1000}
                          height={562}
                          download
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}

          {/* 视频详情 */}
          {!!videoData && (
            <div className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in">
              <Card bordered className="relative shadow-lg">
                <Tooltip title="视频详情">
                  <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                    <FileImageOutlined className="text-[20px] text-white" />
                  </div>
                </Tooltip>
                <div className="relative flex flex-col pt-4">
                  {fetching ? (
                    <Skeleton className="w-full" active />
                  ) : (
                    <div className="mb-4 flex w-full flex-col">
                      <Table
                        columns={videoColumns}
                        dataSource={videoData?.list || []}
                        bordered
                        size="middle"
                        key="title"
                        pagination={false}
                      />
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}

          {/* 使用说明 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in"
          >
            <Card bordered className="relative shadow-lg">
              <Tooltip title="使用说明">
                <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                  <InfoCircleOutlined className="text-[20px] text-white" />
                </div>
              </Tooltip>
              <div className="relative grid grid-cols-1 gap-4 pt-4">
                <div className="text-base">数据仅供娱乐，请勿用于商业用途，责任自负。</div>
                <div className="text-base">
                  在这个神奇的网站上，您将发现更多惊喜与欢笑，让我们一起在Bilibili的潮流中畅游，感受创意的火花与热情的迸发。
                </div>
                <div className="text-base">
                  在这片数字的海洋中，我们为您搭建了一座桥梁，连接您与Bilibili丰富多彩的世界，让您尽情沉浸于创意与激情的海洋中。
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
