import { MenuOutlined, ShopOutlined, UserOutlined } from "@ant-design/icons";

const ITEMS = [
  { key: "categorias", icon: <MenuOutlined />, label: "Todas Categorias" },
  { key: "convenios", icon: <ShopOutlined />, label: "Convênios" },
  { key: "colaboradores", icon: <UserOutlined />, label: "Colaboradores" },
];

export function AppMenu() {
  return (
    <nav className="app-menu">
      {ITEMS.map((item) => (
        <button type="button" className="app-menu__item" key={item.key}>
          {item.icon}
          {item.label}
        </button>
      ))}
    </nav>
  );
}
