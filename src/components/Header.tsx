import { Link } from 'gatsby';
import React from 'react';
import styled, { keyframes } from 'styled-components';

interface HeaderProps {
    siteTitle: string;
}

const StyledHeader = styled.header`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
`;

const heartbeat = keyframes`
    0% { transform: scale(1); }
    80% { transform: scale(1); }
    85% { transform: scale(1.15); }
    90% { transform: scale(1.1); }
    95% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const Logo = styled.img`
    animation: ${heartbeat} infinite 1s linear;
    height: 80px;
`;

const Header = ({ siteTitle }: HeaderProps) => (
    <StyledHeader>
        <Wrapper>
            <Logo src="/logo.svg" alt="logo" style={{ marginBottom: 0 }} />

            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </Wrapper>
    </StyledHeader>
);

export default Header;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    max-width: 960px;
    padding: 1rem;
`;
