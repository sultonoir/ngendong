import { api } from "@/trpc/server";
import { redirect } from "next/navigation";

interface Props {
  params: { id: string };
}

const Page = async ({ params }: Props) => {
  const lodging = await api.lodging.getDraft({
    id: params.id,
  });
  if (lodging) {
    redirect(`/become-a-host/${lodging.id}/structure`);
  }
};

export default Page;
