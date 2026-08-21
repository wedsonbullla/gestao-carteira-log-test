import { Button, Pagination, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EyeOutlined } from "@ant-design/icons";
import {
  OPERATION_LABEL,
  OPERATION_TAG,
  type LogEntry,
} from "../data/logs";

type Props = {
  data: LogEntry[];
  onOpen: (entry: LogEntry) => void;
};

function OperationTag({ operation }: { operation: LogEntry["operation"] }) {
  return (
    <Tag color={OPERATION_TAG[operation].color}>
      {OPERATION_LABEL[operation]}
    </Tag>
  );
}

function LogsCards({ data, onOpen }: Props) {
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
                <dd>{entry.operationId}</dd>
              </div>
            ) : null}
          </dl>
        </li>
      ))}
    </ul>
  );
}

export function LogsTable({ data, onOpen }: Props) {
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
      width: 140,
      render: (operation: LogEntry["operation"]) => (
        <OperationTag operation={operation} />
      ),
    },
    {
      title: "Id da Operação",
      dataIndex: "operationId",
      width: 140,
      ellipsis: true,
      render: (id: string | undefined) => id ?? "—",
    },
    {
      title: "Operador/Aprovador",
      dataIndex: "user",
      width: 168,
      ellipsis: true,
    },
    {
      title: "Descrição",
      dataIndex: "description",
      width: 320,
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
          dataSource={data}
          pagination={false}
          size="middle"
          scroll={{ x: 980 }}
          tableLayout="fixed"
        />
      </div>
      <LogsCards data={data} onOpen={onOpen} />
      <div className="logs-pagination">
        <span className="logs-pagination__count">
          {data.length} Resultados encontrados
        </span>
        <Pagination
          current={1}
          total={data.length}
          pageSize={20}
          showSizeChanger
          pageSizeOptions={["20", "50", "100"]}
          locale={{ items_per_page: "/ página" }}
        />
      </div>
    </section>
  );
}
