import { TableCountFieldAnnotationsArgs } from "./args/TableCountFieldAnnotationsArgs";
import { TableCountFieldsArgs } from "./args/TableCountFieldsArgs";
export declare class TableCount {
    fields: number;
    fieldAnnotations: number;
    getFields(root: TableCount, args: TableCountFieldsArgs): number;
    getFieldAnnotations(root: TableCount, args: TableCountFieldAnnotationsArgs): number;
}
