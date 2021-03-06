import React from 'react';
import styled from 'styled-components';

const NewsItemLink = styled.a`
    display: block;
    width: auto;
    text-decoration: none;
    color: #222;
    padding: 10px;
    border-bottom: dotted 1px #d5d5d5;
    cursor: pointer;
    position: relative;
    padding-left: 120px;
    min-height: 100px;

    &:hover {
        background-color: #eee
    }

    .img {
        width: 100px;
        height: 100px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        left: 10px;
        top: 10px;
        background-color: #fff;
    }

    .subject {
        font-size: 20px;
        font-weight: normal;
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
    }

    .description {
        font-size: 14px;
        padding: 0;
        margin: 0;
    }
`;

const NewsItem = (props) => {
    return (
        <NewsItemLink href={props.article.url} target="_blank">
            <div className="img"
                 style={{backgroundImage: 'url(' + props.article.urlToImage + ')'}} />
            <h2 className='subject'>{props.article.title}</h2>
            <p className='description'>{props.article.description}</p>
        </NewsItemLink>
    );
};

export default NewsItem;
