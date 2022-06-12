import Link from 'next/link';
import React from 'react'
import articleStyles from "../styles/Article.module.css";

function ArticleItem({ article }) {
    return (
        <Link href={`/article/[id]}`} as={`/article/${article.id}`}>
            <a className={articleStyles.card}>
                <h3>{`${article.id}: ${article.title}`} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem