import { Link } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" description="Oberon | Platformen op maat" />
            <h1>Hi devs</h1>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <h2>Open Source</h2>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export default IndexPage;
