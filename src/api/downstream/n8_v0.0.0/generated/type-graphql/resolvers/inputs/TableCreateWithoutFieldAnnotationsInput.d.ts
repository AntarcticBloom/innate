import { Prisma } from "@prisma/client";
import { FieldCreateNestedManyWithoutTableInput } from "../inputs/FieldCreateNestedManyWithoutTableInput";
import { SchemaCreateNestedOneWithoutTablesInput } from "../inputs/SchemaCreateNestedOneWithoutTablesInput";
export declare class TableCreateWithoutFieldAnnotationsInput {
    id?: string | undefined;
    name: string;
    modelName: string;
    relations?: Prisma.InputJsonValue | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    fields?: FieldCreateNestedManyWithoutTableInput | undefined;
    schema?: SchemaCreateNestedOneWithoutTablesInput | undefined;
}
