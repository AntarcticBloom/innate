import { Prisma } from "../../../prismaClient";
import { Field } from "../models/Field";
import { FieldAnnotation } from "../models/FieldAnnotation";
import { Schema } from "../models/Schema";
import { TableCount } from "../resolvers/outputs/TableCount";
export declare class Table {
    id: string;
    schemaId?: string | null;
    name: string;
    modelName: string;
    relations?: Prisma.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    fields?: Field[];
    fieldAnnotations?: FieldAnnotation[];
    schema?: Schema | null;
    _count?: TableCount | null;
}
