import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';
import { server } from '../../../config/index';

function Article({ article }) {
    const router = useRouter();
    const postId = router.query.id;

    return (
        <div>
            <h1>{`${article.id}: ${article.title}`}</h1>
            <p>{article.excerpt}</p>
            <br />
            <Link href="/">Go back</Link>
        </div>
    )
}

export async function getStaticProps(context) {
    let res = await fetch(`${server}/api/articles/${context.params.id}`);
    let article = await res.json();
    return {
        props: {
            article
        }
    }
}

export async function getStaticPaths() {
    let res = await fetch(`${server}/api/articles`);
    let articles = await res.json();    
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths: paths,
        fallback: false,
    }
}

// export async function getStaticProps(context) {
//     let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     let article = await res.json();
//     return {
//         props: {
//             article
//         }
//     }
// }

// export async function getStaticPaths() {
//     let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     let articles = await res.json();
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({ params: { id: id.toString() } }))
//     return {
//         paths: paths,
//         fallback: false,
//     }
// }

export default Article