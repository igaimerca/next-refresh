import React, { useId } from 'react'
import articleStyles from "../styles/Article.module.css";
import ArticleItem from './ArticleItem';

function ArticleList({ articles }) {
    const id = useId()
    return (
        <div className={articleStyles.grid}>
            {articles && articles.map(article => (
                <ArticleItem key={id} article={article} />
            )

            )}
        </div>
    )
}

export default ArticleList
