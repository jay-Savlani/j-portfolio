import { isValidElement } from "react";

type T_ListProps<T> = {
  items: T[];
  selectedItem?: T;
  onSelect?: (value: T) => void;
  classes?: string;
  ListItem?: React.ComponentType<{
    item: T;
    selectedItem?: T;
    onSelect?: (value: T) => void;
  }>;
};

export const List = <T,>({
  items,
  ListItem,
  classes,
  selectedItem,
  onSelect,
}: T_ListProps<T>) => {
  let listClasses = "flex flex-col  gap-y-3.5 flex-wrap ";

  if (classes) {
    listClasses = classes;
  }

  const clickHandler = (item: T) => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    // <div className={classes}>
    <ul className={listClasses}>
      {items.map((item, index) => {
        if (ListItem) {
          return (
            <ListItem
              item={item}
              key={index}
              onSelect={onSelect}
              selectedItem={selectedItem}
            />
          );
        }

        let listClasses =
          "px-2 py-1 tracking-[4px] hover:bg-slate-200 hover:cursor-pointer rounded-md hover:text-slate-900 ";

        if (selectedItem && selectedItem === item) {
          listClasses +=
            "bg-slate-200 text-slate-700 shadow-inner shadow-stone-700";
        } else listClasses += "text-white";

        return (
          <li
            className={listClasses}
            key={index}
            onClick={() => clickHandler(item)}
          >
            {typeof item === "string"
              ? item.toUpperCase()
              : isValidElement(item)
              ? item
              : null}
          </li>
        );
      })}
    </ul>
    // </div>
  );
};
