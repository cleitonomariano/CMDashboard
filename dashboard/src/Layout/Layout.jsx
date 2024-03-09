import Head from "next/head";
import Sidebar from "../Components/Sidebar/Sidebar";
import styles from "./Layout.module.scss";

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className={styles.main}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
