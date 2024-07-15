import { Prisma } from "../../../../prismaClient";
import { FieldAnnotationCreateNestedManyWithoutTableInput } from "../inputs/FieldAnnotationCreateNestedManyWithoutTableInput";
import { SchemaCreateNestedOneWithoutTablesInput } from "../inputs/SchemaCreateNestedOneWithoutTablesInput";
export declare class TableCreateWithoutFieldsInput {
    id?: string | undefined;
    name: string;
    modelName: string;
    relations?: Prisma.InputJsonValue | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    fieldAnnotations?: FieldAnnotationCreateNestedManyWithoutTableInput | undefined;
    schema?: SchemaCreateNestedOneWithoutTablesInput | undefined;
}
