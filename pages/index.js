import Head from 'next/head'

export default function Home({ articles }) {
    console.log(articles);
    return (
        <div>
            <Head>
                <title>Ok.</title>
                <meta name="keywords" content="programming, blogs" />
            </Head>
            <h1>Welcome to next</h1>
            {articles && articles.map(article => <p>{article.title}</p>)}
        </div>
    )
}   

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
    const articles = await res.json();
    return {
        props: {
            articles
        }
    }
}