import Head from 'next/head'
import Home from "../components/Home";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Nosh | Sell Gift Cards Online For Instant Cash In Nigeria </title>
                <meta name="description" content="nosh-clone.vercel.app"/>
                <link rel="icon" href="/logo.png"/>
            </Head>

            <Home/>
        </>
    )
};
