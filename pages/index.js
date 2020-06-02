import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data</title>
      </Head>

      <main>
        <h2>Hi! Welcome to uli's data playground</h2>

        <nav>
          <Link href="/stocks">
            <a>Visualize some stocks</a>
          </Link>
        </nav>
      </main>
    </>
  );
}
