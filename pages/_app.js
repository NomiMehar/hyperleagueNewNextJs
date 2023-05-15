import '@/styles/globals.scss'
import "../styles/animation.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
