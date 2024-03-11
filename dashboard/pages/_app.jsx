import Layout from "@/Layout/Layout";
import "../styles/globals.scss";
function myApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default myApp;
