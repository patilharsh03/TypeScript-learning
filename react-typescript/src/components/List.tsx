import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, id) => (
        <li key={id}>
            {render(item)}
        </li>
      ))}
    </ul>
  );
};
