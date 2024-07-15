import { Field } from "../models/Field";
import { Table } from "../models/Table";
export declare class FieldAnnotation {
    id: string;
    tableId?: string | null;
    modelName: string;
    fieldId?: string | null;
    fieldName: string;
    annotation: string;
    createdAt: Date;
    updatedAt: Date;
    field?: Field | null;
    table?: Table | null;
}
