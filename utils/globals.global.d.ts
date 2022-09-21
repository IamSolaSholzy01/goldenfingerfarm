import { PrismaClient } from "@prisma/client/scripts/default-index";

declare global {
  var prisma: PrismaClient;
}
