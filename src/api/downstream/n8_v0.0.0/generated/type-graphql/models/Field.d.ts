import { FieldAnnotation } from "../models/FieldAnnotation";
import { Table } from "../models/Table";
import { FieldCount } from "../resolvers/outputs/FieldCount";
export declare class Field {
    id: string;
    tableId?: string | null;
    name: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    table?: Table | null;
    fieldAnnotations?: FieldAnnotation[];
    _count?: FieldCount | null;
}
