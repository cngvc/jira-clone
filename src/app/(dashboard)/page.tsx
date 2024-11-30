import { redirect } from "next/navigation";

import { internal_urls } from "@/constants/internal-urls";
import { getCurrent } from "@/features/auth/queries";

export default async function Home() {
  const user = await getCurrent();
  if (!user) redirect(internal_urls.sign_in);

  // const workspaces = await getWorkspaces();
  // if (workspaces.total === 0) {
  //   redirect(internal_urls.workspaces + "/create");
  // } else {
  //   redirect(internal_urls.workspaces + `/${workspaces.documents[0].$id}`);
  // }

  return <div />;
}
