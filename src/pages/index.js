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
          <div class="hero__avatar">
            <img src={useBaseUrl('/img/logo.png')} alt="rabbit online" />
          </div>
          <div class="hero__content">
            <h1>没有伞的孩子必须努力奔跑</h1>
            <p>Follow me on:</p>
            <p>
              {/* <span><a href="https://twitter.com/MDesignsuk" target="_blank"><i class="fa fa-twitter"></i></a></span> */}
              <span><a href="https://github.com/Lacorda/" target="_blank"><i class="fa fa-github"></i></a></span>
              {/* <span><a href="https://bitbucket.org/Mario_Duarte/" target="_blank"><i class="fa fa-bitbucket"></i></a></span>
              <span><a href="https://codepen.io/MarioDesigns/" target="_blank"><i class="fa fa-codepen"></i></a></span> */}
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
      description="个人站">
      <HomepageHeader />
      <main>
        {/* <HomepageList /> */}
      </main>
    </Layout>
  );
}

