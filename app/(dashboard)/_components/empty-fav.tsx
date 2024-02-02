import Image from "next/image";

export const EmptyFav = () => {
  return (
    <div className=" h-full flex flex-col justify-center items-center">
      <Image src="/empty_fav.svg" alt="empty" height={140} width={140} />
      <h2 className=" text-2xl font-semibold mt-6 ">No favourites found!</h2>
      <p className=" text-muted-foreground text-sm mt-2">
        Try searching for something else.
      </p>
    </div>
  );
};
