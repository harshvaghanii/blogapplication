import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha512-tDXPcamuZsWWd6OsKFyH6nAqh/MjZ/5Yk88T5o+aMfygqNFPan1pLyPFAndRzmOWHKT+jSDzWpJv8krj6x1LMA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
