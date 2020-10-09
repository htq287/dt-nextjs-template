import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../lib/store';

const _app: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(_app);