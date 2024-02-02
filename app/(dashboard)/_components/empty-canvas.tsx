import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyCanvas = () => {
  return (
    <div className=" h-full flex flex-col justify-center items-center">
      <Image src="/empty_canvas.svg" alt="empty" height={140} width={140} />
      <h2 className=" text-2xl font-semibold mt-6 ">
        Create your first canvas!
      </h2>
      <p className=" text-muted-foreground text-sm mt-2">
        Start by creating a new canvas for your organization.
      </p>
      <div className=" mt-6">
        <Button size="lg">Create Canvas</Button>
      </div>
    </div>
  );
};
