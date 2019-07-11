import App, { Container } from 'next/app';
import React from 'react';
import BasicLayout from '../layouts/index';
export default class MyApp extends App {
  public static async getInitialProps ({ Component, ctx }: any) {
    let pageProps = {
      pathname: ctx.pathname,
      asPath: ctx.asPath,
      query: ctx.query,
    };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  public render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <BasicLayout pathname={pageProps.pathname}>
          <Component {...pageProps} />
        </BasicLayout>
      </Container>
    );
  }
}
