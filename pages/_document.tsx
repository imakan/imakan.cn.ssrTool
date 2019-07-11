import Document, { Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  public static async getInitialProps (ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  public render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="Cache-Control" content="no-transform" />
          <meta httpEquiv="Cache-Control" content="no-siteapp" />
          <meta name="keywords" content="imakan" />
          <meta name="description" content="imakan - 工具站 | 前端 | js | imakan | web | 工程师" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="imakan!小栈" />
          <meta property="og:url" content="https://imakan.cn/tools" />
          <meta property="og:site_name" content="imakan!小栈" />
          <meta property="og:description" content="imakan - 工具站" />
          <meta name="twitter:card" content="imakan520" />
          <meta name="twitter:title" content="imakan!小栈 " />
          <meta name="twitter:description" content="imakan - 工具站" />
          <style>{`body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}`}</style>
          <style>{`.ant-layout{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;}`}</style>
        </Head>
        <body className="imakan">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
