import { Prisma } from "@prisma/client";
export declare class TableCreateManyInput {
    id?: string | undefined;
    schemaId?: string | undefined;
    name: string;
    modelName: string;
    relations?: Prisma.InputJsonValue | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
