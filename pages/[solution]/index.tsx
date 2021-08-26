import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getTaggedMarkdownData, getPageLevelInfo } from '../../lib/getMarkdownData';
import { Tags } from '../../interfaces/tags'
import { MarkdownAsset, MardownMeta } from '../../interfaces/markdownAsset';
import { useRouter } from 'next/dist/client/router';
import { UrlParams } from '../../interfaces/UrlParams';
import Link from 'next/link'

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}

export async function getStaticProps(context: any) {
    const slug: UrlParams = context.params;

    let pageTags: Tags = {
        solution: slug.solution,
        products: [slug.solution]
    }
    const pageInfo = await getPageLevelInfo(pageTags)

    let filesTags: Tags = {
        solution: slug.solution,
    }
    const files = await getTaggedMarkdownData(filesTags);

    return {
        props: {
            slug,
            files,
            pageInfo
        },
    };
}

export default function solutionPage({ slug, files, pageInfo }: { slug: any, files: MarkdownAsset[], pageInfo: MardownMeta }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{pageInfo.prettyName}</title>
                <meta name="description" content={pageInfo.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {pageInfo.prettyName}
                </h1>
                <p>
                    {pageInfo.description}
                </p>
                <div className={styles.grid}>
                    {files.map(file => (
                        <div key={file.id} className={styles.productCategoryCardCompact}>
                            <h2>{file.prettyName}</h2>
                            <p>{file.description}</p>
                            <Link href={`${slug.solution}/${file.product}`}>
                                <a>Learn more...</a>
                            </Link>
                        </div>
                    ))}

                    <div className={styles.socialsCard}>
                        <h2>Socials</h2>
                    </div>

                    <div className={styles.socialsCard}>
                        <h2>News &amp; Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new things</li></a>
                    </div>

                </div>
            </main>
        </div>)
}
