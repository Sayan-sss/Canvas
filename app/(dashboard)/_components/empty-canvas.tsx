"use client";

import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyCanvas = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);
  const router = useRouter();

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Canvas created successfully");
        router.push(`/boards/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create canvas");
      });
  };
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
        <Button disabled={pending} onClick={onClick} size="lg">
          Create Canvas
        </Button>
      </div>
    </div>
  );
};
