import React from 'react';
// import Wow from 'wow.js'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';

import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--primary heroBanner">
      <MDXContent>
        <div className="container">
          <div className="hero__avatar">
            <img src={useBaseUrl('/img/logo.png')} alt="rabbit online" />
          </div>
          <div className="hero__content">
            <h1>Hi~ 欢迎来到我的小屋</h1>
            <h3>记录学习、留住生活，让时间过得慢一点</h3>
            <p>Follow me on:</p>
            <p>
              <span><a href="https://github.com/lacorda/" target="_blank"><i className="fa fa-github"></i></a></span>
            </p>
            <p>BY: {siteConfig.organizationName}</p>
          </div>
        </div>
      </MDXContent>
    </header>
  );
}

export default function Home() {
  const data = useDocusaurusContext();
  const { siteConfig } = data;
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      wrapperClassName="lacorda-homepage"
      description="个人站">
      <HomepageHeader />
      <main>
        {/* <HomepageList /> */}
      </main>
    </Layout>
  );
}

