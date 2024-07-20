import { SchemaCountTablesArgs } from "./args/SchemaCountTablesArgs";
export declare class SchemaCount {
    tables: number;
    getTables(root: SchemaCount, args: SchemaCountTablesArgs): number;
}
