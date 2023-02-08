import Head from "next/head";
import Link from "next/link";

export default function PageLayout({ children, title = 'NewsApp' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="newsapp -- the best app to read news" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div>
                    <Link href="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link href="/about">
                        About
                    </Link>
                </div>
            </header>
            <main>{children}</main>
            <style jsx>
                {`
                    header {
                        padding: 20px,
                        flex-direction: row;
                    }
                `}
            </style>
        </>
    )
}