import { internal_urls } from "@/constants/internal-urls";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const user = await getCurrent();

  if (user) redirect(internal_urls.home);

  return <SignInCard />;
};

export default SignInPage;
