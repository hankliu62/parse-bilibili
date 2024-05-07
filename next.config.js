/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 导出静态文件out
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@hankliu/hankliu-ui'],
  // webpack: (config, context) => {
  //   return config;
  // },
  // 在output: "export" 模式下无法使用rewrites 或者headers 等设置，官方文档列出的完整不支持的功能如下：
  // async headers() {
  //   return [
  //     {
  //       source: "/styles/animate.css/@4.1.1/animate.css",
  //       headers: [
  //         {
  //           key: "cache-control",
  //           value: "public, immutable, max-age=31536000",
  //         },
  //       ],
  //     },
  //   ];
  // },
  env: {
    ROUTE_PREFIX: '',
    MXNZPAPI_KEY: process.env.MXNZPAPI_KEY,
    MXNZPAPI_SECRET: process.env.MXNZPAPI_SECRET,
  },
};

// 是否通过github actions部署
const isGithubActions = process.env.GITHUB_ACTIONS || false;

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  // 用于为静态资源（如图像、样式表、JavaScript 文件等）设置 URL 前缀
  // 这在将应用部署到自定义域名或 CDN 上时特别有用，因为它允许您将静态资源存储在不同的位置
  nextConfig.assetPrefix = `/${repo}/`;
  // 用于为应用设置基础路径(Link组件中，类似 history 里面的basename，在路由跳转时自动加前缀)
  // 这在将应用部署到子目录下时特别有用，因为它允许您指定应用所在的目录
  nextConfig.basePath = `/${repo}`;
  nextConfig.env.ROUTE_PREFIX = `/${repo}`;

  const {
    env: { MXNZPAPI_KEY, MXNZPAPI_SECRET, ...envs },
    ...conf
  } = nextConfig;
  console.log('next config is:', { ...conf, env: { ...envs } });
}

module.exports = nextConfig;
