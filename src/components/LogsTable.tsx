import { Button, Empty, Pagination, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EyeOutlined } from "@ant-design/icons";
import {
  OPERATION_LABEL,
  OPERATION_TAG,
  type LogEntry,
} from "../data/logs";

type Props = {
  data: LogEntry[];
  page: number;
  pageSize: number;
  onPageChange: (page: number, pageSize: number) => void;
  onOpen: (entry: LogEntry) => void;
};

function OperationTag({ operation }: { operation: LogEntry["operation"] }) {
  return (
    <Tag color={OPERATION_TAG[operation].color}>
      {OPERATION_LABEL[operation]}
    </Tag>
  );
}

function OperationId({ id }: { id?: string }) {
  if (!id) return <>{"—"}</>;
  return <span className="logs-operation-id">{id}</span>;
}

function LogsCards({ data, onOpen }: { data: LogEntry[]; onOpen: (entry: LogEntry) => void }) {
  if (!data.length) {
    return (
      <Empty
        className="logs-empty logs-empty--cards"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Nenhum resultado encontrado"
      />
    );
  }

  return (
    <ul className="logs-cards">
      {data.map((entry) => (
        <li className="logs-card" key={entry.id}>
          <div className="logs-card__top">
            <OperationTag operation={entry.operation} />
            {entry.drawer ? (
              <Button
                type="link"
                aria-label="Ver detalhes"
                icon={<EyeOutlined />}
                onClick={() => onOpen(entry)}
              />
            ) : null}
          </div>
          <p className="logs-card__description">{entry.description}</p>
          <dl className="logs-card__meta">
            <div>
              <dt>Data</dt>
              <dd>{entry.date}</dd>
            </div>
            <div>
              <dt>Horário</dt>
              <dd>{entry.time}</dd>
            </div>
            <div>
              <dt>Operador/Aprovador</dt>
              <dd>{entry.user}</dd>
            </div>
            {entry.operationId ? (
              <div>
                <dt>Id da Operação</dt>
                <dd>
                  <OperationId id={entry.operationId} />
                </dd>
              </div>
            ) : null}
          </dl>
        </li>
      ))}
    </ul>
  );
}

export function LogsTable({ data, page, pageSize, onPageChange, onOpen }: Props) {
  const start = (page - 1) * pageSize;
  const pageRows = data.slice(start, start + pageSize);

  const columns: ColumnsType<LogEntry> = [
    {
      title: "Data",
      dataIndex: "date",
      width: 128,
    },
    {
      title: "Horário",
      dataIndex: "time",
      width: 128,
    },
    {
      title: "Operação",
      dataIndex: "operation",
      width: 148,
      render: (operation: LogEntry["operation"]) => (
        <OperationTag operation={operation} />
      ),
    },
    {
      title: "Id da Operação",
      dataIndex: "operationId",
      width: 140,
      render: (id: string | undefined) => <OperationId id={id} />,
    },
    {
      title: "Operador/Aprovador",
      dataIndex: "user",
      width: 180,
      ellipsis: true,
    },
    {
      title: "Descrição",
      dataIndex: "description",
    },
    {
      title: "Ação",
      key: "action",
      width: 72,
      fixed: "right",
      className: "logs-table__action",
      render: (_, entry) =>
        entry.drawer ? (
          <Button
            type="link"
            aria-label="Ver detalhes"
            icon={<EyeOutlined />}
            onClick={() => onOpen(entry)}
          />
        ) : null,
    },
  ];

  return (
    <section className="table-card">
      <div className="logs-table-wrap">
        <Table
          className="logs-table"
          rowKey="id"
          columns={columns}
          dataSource={pageRows}
          pagination={false}
          size="middle"
          scroll={{ x: 980 }}
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Nenhum resultado encontrado"
              />
            ),
          }}
        />
      </div>
      <LogsCards data={pageRows} onOpen={onOpen} />
      <div className="logs-pagination">
        <span className="logs-pagination__count">
          {data.length} {data.length === 1 ? "Resultado encontrado" : "Resultados encontrados"}
        </span>
        <Pagination
          current={page}
          total={data.length}
          pageSize={pageSize}
          showSizeChanger={{ showSearch: false }}
          pageSizeOptions={["10", "20", "50", "100"]}
          locale={{ items_per_page: "/ página" }}
          onChange={onPageChange}
        />
      </div>
    </section>
  );
}
