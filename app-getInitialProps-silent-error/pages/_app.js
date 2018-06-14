import App, { Container } from 'next/app';
import React from 'react';

export default class MyApp extends App {

  static async getInitialProps ({ Component, ctx }) {
    const env = process.browser ? 'client' : 'server';
    console.log(`Executing MyApp getInitialProps (${env} side)`, { Component });

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (env === 'client') {
      console.log(`Throwing Error in MyApp getInitialProps (${env} side)`);
      throw new Error(`Error in MyApp getInitialProps (${env} side)`);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }

}
