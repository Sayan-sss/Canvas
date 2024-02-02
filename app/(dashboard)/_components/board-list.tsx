"use client";

import { EmptyCanvas } from "./empty-canvas";
import { EmptyFav } from "./empty-fav";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //todo api call

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favourites) {
    return <EmptyFav />;
  }

  if (!data?.length) {
    return <EmptyCanvas />;
  }
  return <div>{JSON.stringify(query)}</div>;
};
