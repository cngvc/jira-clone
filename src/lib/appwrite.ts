import "server-only";

import { cookies } from "next/headers";
import { Account, Client, Databases, Users } from "node-appwrite";

import { APPWRITE_ENDPOINT, APPWRITE_KEY, APPWRITE_PROJECT } from "@/config";
import { AUTH_COOKIE } from "@/features/auth/constants";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT!)
    .setProject(APPWRITE_PROJECT!);

  const session = await (await cookies()).get(AUTH_COOKIE);

  if (!session || !session.value) {
    throw new Error("Unauthorized");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT!)
    .setProject(APPWRITE_PROJECT!)
    .setKey(APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get users() {
      return new Users(client);
    },
  };
}
