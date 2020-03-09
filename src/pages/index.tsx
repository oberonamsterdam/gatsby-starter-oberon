import { Link } from 'gatsby';
import React from 'react';
import Image from '../components/Image';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

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
