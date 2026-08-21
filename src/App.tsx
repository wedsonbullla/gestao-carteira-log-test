import { useMemo, useState } from "react";
import { Breadcrumb, Button, Drawer, Typography } from "antd";
import { ArrowLeftOutlined, HomeOutlined } from "@ant-design/icons";
import { AppHeader } from "./layout/AppHeader";
import { AppMenu } from "./layout/AppMenu";
import { LogsFilters, type FilterValues } from "./components/LogsFilters";
import { LogsTable } from "./components/LogsTable";
import { CompanyDrawer } from "./drawers/CompanyDrawer";
import { SettingsDrawer } from "./drawers/SettingsDrawer";
import { CessaoDrawer } from "./drawers/CessaoDrawer";
import { LOGS, type LogEntry } from "./data/logs";

const { Title, Text } = Typography;

export default function App() {
  const [filters, setFilters] = useState<FilterValues>({ operations: [] });
  const [applied, setApplied] = useState<FilterValues>({ operations: [] });
  const [selected, setSelected] = useState<LogEntry | null>(null);

  const rows = useMemo(() => {
    return LOGS.filter((entry) => {
      if (applied.operations?.length && !applied.operations.includes(entry.operation)) {
        return false;
      }
      if (applied.user && !entry.user.toLowerCase().includes(applied.user.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [applied]);

  const drawerWidth = selected?.drawer === "cessao" ? 790 : 380;

  return (
    <div className="app-shell">
      <AppHeader />
      <AppMenu />
      <main className="page">
        <Button className="page__back" type="primary" icon={<ArrowLeftOutlined />}>
          Voltar
        </Button>
        <Breadcrumb
          className="page__crumb"
          items={[
            {
              title: (
                <span>
                  <HomeOutlined /> Página Inicial
                </span>
              ),
            },
            { title: <span className="page__crumb-current">Logs</span> },
          ]}
        />
        <Title level={3} className="page__title">
          Logs
        </Title>
        <Text className="page__subtitle">
          Consulte alterações realizadas manualmente por usuários
        </Text>
        <LogsFilters
          values={filters}
          onChange={setFilters}
          onFilter={() => setApplied(filters)}
          onClear={() => {
            const cleared: FilterValues = { operations: [], period: null, user: "" };
            setFilters(cleared);
            setApplied(cleared);
          }}
        />
        <LogsTable data={rows} onOpen={setSelected} />
      </main>
      <Drawer
        open={Boolean(selected)}
        width={drawerWidth}
        closable={false}
        destroyOnClose
        onClose={() => setSelected(null)}
      >
        {selected?.drawer === "company" && (
          <CompanyDrawer onClose={() => setSelected(null)} />
        )}
        {selected?.drawer === "settings" && (
          <SettingsDrawer onClose={() => setSelected(null)} />
        )}
        {selected?.drawer === "cessao" && (
          <CessaoDrawer onClose={() => setSelected(null)} />
        )}
      </Drawer>
    </div>
  );
}
