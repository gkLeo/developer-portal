import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
    const moosend = await getMarkdownData("moosend.md");
    const marketingAutomationEngine = await getMarkdownData("marketingAutomationEngine.md");
    const marketingOperations = await getMarkdownData("marketingOperations.md");
    const segmentationAndConditions = await getMarkdownData("segmentationAndConditions.md");
    const processing = await getMarkdownData("processing.md");
    const cortexProcessingEngine = await getMarkdownData("cortexProcessingEngine.md");
    const reporting = await getMarkdownData("reporting.md");

    return {
        props: {
            moosend,
            marketingAutomationEngine,
            marketingOperations,
            segmentationAndConditions,
            processing,
            cortexProcessingEngine,
            reporting
        },
    };
}

export default function MarketingAutomation({ moosend, marketingAutomationEngine, marketingOperations, segmentationAndConditions, processing, cortexProcessingEngine, reporting }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Marketing Automation</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Marketing Automation 🚗
                </h1>
                <a href="/" className={styles.link}><h2>Take me Home</h2></a>
                <div className={styles.grid}>
                    <div className={styles.searchCard}>
                        <h2>I'm a unified search 🔍</h2>
                    </div>


                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{moosend.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{marketingAutomationEngine.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{marketingOperations.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{segmentationAndConditions.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{processing.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{cortexProcessingEngine.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{reporting.markdown}</ReactMarkdown>
                    </div>


                    <div className={styles.socialsCard}>
                        <h2>General Marketing Automation Socials</h2>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new Marketing Automation things</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>Get Help</h2>
                        <a href="https://support.sitecore.com/kb?id=kb_home" className={styles.link}><li>Sitecore Support</li></a>
                    </div>

                </div>
            </main>
        </div>)
}

