import App,{ AppContext } from 'next/app';
import { isServer } from '../lib/env'; 
import React, { ReactNode } from 'react';
import { JstarThemeProvider } from '../theme';

interface InitialProps {
  isServer: boolean;
}

class MyMobxApp extends App<InitialProps>{
  static async getInitalProps({
    Component,
    ctx
  }: AppContext): Promise<{
      pageProps: {};
      isServer: boolean;
    }>{
      let pageProps = {};
      const { req, res, pathname, query, asPath} = ctx;

    if(Component.getInitialProps){
      try{
        pageProps = await Component.getInitialProps(ctx);
      } catch(e) {
        (pageProps as any).error = e; 
      }
    } 

    return { pageProps, isServer }; 

  }
  render(): JSX.Element {
    const { Component, pageProps, isServer, ...rest} = this.props;
    return(
      <>
        Hello MyMobxApp 
        <JstarThemeProvider>
          <Component {...pageProps}/>  
        </JstarThemeProvider>
      </>
    )
  }  
}
export default MyMobxApp; 