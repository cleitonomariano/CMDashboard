import styles from "./Sidebar.module.scss";
import Image from "next/image";
import { IoLogoBuffer } from "react-icons/io";
import {
  GiReceiveMoney,
  GiShop,
  GiChart,
  GiSettingsKnobs,
} from "react-icons/gi";
import {
  MdOutlineDashboardCustomize,
  MdOutlineShoppingBag,
  MdAttachMoney,
  MdInsertChartOutlined,
  MdOutlineSettings,
} from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { name: "painel", icon: <MdOutlineDashboardCustomize />, url: "/" },
  { name: "produtos", icon: <GiShop />, url: "/produtos" },
  { name: "vendas", icon: <GiReceiveMoney />, url: "/vendas" },
  { name: "relatório", icon: <GiChart />, url: "/relatorio" },
  { name: "configurações", icon: <GiSettingsKnobs />, url: "/configuracoes" },
];

const Sidebar = () => {
  const router = useRouter();
  let { route } = router;

  if (route === "/nova-venda") route = "/";
  if (route === "/produtos/adicionar") route = "/produtos";

  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <Link href={link.url} className={route === link.url ? styles.active : ""}>
        <div>{link.icon}</div>
        <span>{link.name}</span>
      </Link>
    </li>
  ));
  return (
    <section className={styles.sidebar}>
      <div className={styles.image}>
        <IoLogoBuffer />
        {/* <Image src={IoLogoBuffer} alt="dashboard" width="46" height="43" /> */}
      </div>
      <nav className={styles.navigation}>
        <ul>{renderLinks}</ul>
      </nav>
    </section>
  );
};
export default Sidebar;
