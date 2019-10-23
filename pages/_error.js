import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="error-message row" id="content-root">
        <div>
          <h1 id="error-code">404</h1>
          <div id="error-msg">
            These are not the Singhs you are looking for.
          </div>
          <div id="error-desc">
            The requested URL &quot;{router.asPath}&quot; was not found on this
            server.
          </div>
        </div>
        <div>
          <img
            src="/assets/images/404.png"
            alt="Image of Sikh Man smiling at you"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Error;
