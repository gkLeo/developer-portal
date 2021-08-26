import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

export async function getStaticProps() {
    return {
        props: {
        },
    };
}

export default function MarketingAutomation({ }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Marketing Automation</title>
                <meta name="description" content="Connect with customers using marketing automation" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Marketing Automation 🚗
                </h1>
                <div className={styles.grid}>

                    <div className={styles.productCategoryCardCompact}>
                        <h2>Moosend</h2>
                        <p>A place to send Moos</p>
                        <Link href="marketing-automation/moosend">
                            <a>Learn more...</a>
                        </Link>
                    </div>
                    
                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore XP: Marketing Automation and EXM</h2>
                        <p>A market for your automation</p>
                        <Link href="marketing-automation/experience-platform">
                            <a>Learn more...</a>
                        </Link>
                    </div>

                    <div className={styles.socialsCard}>
                        <h2>Latest Stack Exchange questions</h2>
                        <p>#marketing-automation, #exm</p>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new Marketing Automation things</li></a>
                    </div>
                </div>
            </main>
        </div>)
}
