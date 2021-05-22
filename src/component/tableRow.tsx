import React, { useEffect, useRef } from "react";
import { TableDataType } from "../utils/types";

interface Props {
  data: TableDataType;
  isSecondLast: boolean;
  fetchPaginated: () => void;
  onCellClick: () => void;
}

const registerObserver = (ref: any, fetchData: any) => {
  const observer = new IntersectionObserver(
    (enteries, observer) => {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchData();
          observer.disconnect();
        }
      });
    },
    { rootMargin: "50%" }
  );
  observer.observe(ref);
};

export const TableDataRow: React.FC<Props> = ({
  data,
  isSecondLast,
  fetchPaginated,
  onCellClick,
}) => {
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSecondLast) {
      registerObserver(tableRef.current, fetchPaginated);
    }
  }, []);

  let date = data?.creation_date
    ? new Date(data?.creation_date).toLocaleDateString()
    : "";

  return (
    <tr key={data.question_id} onClick={onCellClick}>
      <td>
        {isSecondLast && <div ref={tableRef}>{data.title}</div>}
        {!isSecondLast && <div>{data.title}</div>}
      </td>
      <td>{data.owner?.display_name}</td>
      <td>{date}</td>
    </tr>
  );
};
