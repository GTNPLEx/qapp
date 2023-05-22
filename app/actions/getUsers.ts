import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

interface UserCreateInput {
  email: string;
  password: string;
}

async function createUser(email: string, password: string) {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error("Email address is already in use");
  }

  const user = await prisma.user.create({
    data: {
      email,
      password,
    } as UserCreateInput, // Type assertion to specify the correct type
  });

  return user;
}

const getUsers = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {       createdAt: 'desc'
    },
    where: {
      NOT: {
        email: session.user.email
      }
    }
  });

  return users;
} catch (error: any) {
  return [];
 }
};

export default getUsers;

