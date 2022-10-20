import NavBar from "../components/NavBar";
import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <span>hello~!</span>
    </Layout>
  );
}
