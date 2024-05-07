import '@/styles/globals.css';
import 'nprogress/nprogress.css';
// 页面滚动元素动画
import 'aos/dist/aos.css';
// footer组件
import '@hankliu/rc-footer/assets/index.css';
// exception组件
import '@hankliu/rc-exception/assets/index.css';

import { ConfigProvider, Watermark } from '@hankliu/hankliu-ui';
import zhCN from '@hankliu/hankliu-ui/lib/locale/zh_CN';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';

import useTopWindow from '@/hooks/useTopWindow';
import DefaultLayout from '@/layouts/index';
import { getRoutePrefix } from '@/utils/route';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/**
 * 网站入口APP类
 * @param param0
 * @returns
 */
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  const isTop = useTopWindow();

  return (
    <>
      <Head>
        <title>天气预报 - H.L Toolkits</title>
        <link rel="icon" href={`${getRoutePrefix()}/favicon.ico`} />
        <meta
          name="description"
          content="天气预报仿佛是一位守护者，在黑夜降临之前，轻声呢喃着大自然的秘密，为我们揭开了星辰交错下的天象之谜。"
        />
        <meta
          name="keywords"
          content="天气,天气预报,最新天气,toolkit,toolkits,前端开发,前端开发工具,前端开发工具集合,在线工具,toolbox,frontend,卡鲁秋,Hank,HankLiu"
        />
        <meta name="author" content="Hank.Liu" />
      </Head>

      {getLayout(
        <ConfigProvider locale={zhCN}>
          <Watermark
            content={isTop ? 'HankLiu Weather' : ''}
            font={{ color: 'rgba(0, 0, 0, 0.1)' }}
            className="flex h-full flex-1 flex-col"
          >
            <Component {...pageProps} />
          </Watermark>
        </ConfigProvider>,
      )}
    </>
  );
}
