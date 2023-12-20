// pages/_app.js or app/pages/_app.js

import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Layout from '@/app/layout';

function MyApp({ Component, pageProps, router }: AppProps & { router: any }) {
    return (
        <Layout>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </Layout>
    );
}

export default MyApp;