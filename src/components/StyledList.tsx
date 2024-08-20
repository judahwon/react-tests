export interface ListProps {
  records: number[];
  id?: string;
}

export interface ListItemProps {
  children?: React.ReactNode;
  index?: number;
}

function ListItem(props: ListItemProps) {
  const { children, index } = props;

  return (
    <li
      className="my-1 flex h-12 w-32 items-center justify-center rounded-sm bg-zinc-300 text-zinc-800"
      key={index}
    >
      {children}
    </li>
  );
}

function List(props: ListProps) {
  const { records, id } = props;
  const isRecordsEmpty = records.length === 0;

  return (
    <ul id={id} className="mt-4 border-2 border-zinc-500 p-2">
      {isRecordsEmpty
        ? <ListItem index={0}>
          기록이 없습니다.
        </ListItem>
        : records.map((record, index) => (
          <ListItem index={index} key={index}>
            {index + 1}번째 기록: {record}
          </ListItem>
        ))}
    </ul>
  );
}

export default List;