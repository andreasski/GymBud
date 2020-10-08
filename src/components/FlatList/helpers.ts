import { Listable } from '../../abstract/Listable';

export const itemFilter = (item: Listable, query: string): boolean => {
  if (!query) {
    return true;
  }

  const nameLowerCased = item.name.toLowerCase();
  const queryLowerCased = query.toLowerCase();

  return nameLowerCased.includes(queryLowerCased);
};

export const itemSorter = (a: Listable, b: Listable): number => {
  const nameALowerCased = a.name.toLowerCase();
  const nameBLowerCased = b.name.toLowerCase();

  return nameALowerCased === nameBLowerCased
    ? 0
    : a.name.toLowerCase() > b.name.toLowerCase()
    ? 1
    : -1;
};
