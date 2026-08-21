import { useMemo, useState } from "react";
import { Breadcrumb, Button, Drawer, Typography } from "antd";
import { ArrowLeftOutlined, HomeOutlined } from "@ant-design/icons";
import { AppHeader } from "./layout/AppHeader";
import { AppMenu } from "./layout/AppMenu";
import { EMPTY_FILTERS, LogsFilters, type FilterValues } from "./components/LogsFilters";
import { LogsTable } from "./components/LogsTable";
import { CompanyDrawer } from "./drawers/CompanyDrawer";
import { SettingsDrawer } from "./drawers/SettingsDrawer";
import { CessaoDrawer } from "./drawers/CessaoDrawer";
import { LOGS, type LogEntry } from "./data/logs";
import { matchesFilters } from "./lib/filterLogs";

const { Title, Text } = Typography;

export default function App() {
  const [filters, setFilters] = useState<FilterValues>(EMPTY_FILTERS);
  const [applied, setApplied] = useState<FilterValues>(EMPTY_FILTERS);
  const [selected, setSelected] = useState<LogEntry | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const rows = useMemo(() => LOGS.filter((entry) => matchesFilters(entry, applied)), [applied]);

  const applyFilters = (next = filters) => {
    setApplied(next);
    setPage(1);
  };

  const clearFilters = () => {
    setFilters(EMPTY_FILTERS);
    setApplied(EMPTY_FILTERS);
    setPage(1);
  };

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
          onFilter={() => applyFilters()}
          onClear={clearFilters}
        />
        <LogsTable
          data={rows}
          page={page}
          pageSize={pageSize}
          onPageChange={(nextPage, nextSize) => {
            setPage(nextPage);
            setPageSize(nextSize);
          }}
          onOpen={setSelected}
        />
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
