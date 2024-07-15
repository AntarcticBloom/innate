import type { GraphQLResolveInfo } from "graphql";
import { Field } from "../../../models/Field";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
import { Schema } from "../../../models/Schema";
import { Table } from "../../../models/Table";
import { TableFieldAnnotationsArgs } from "./args/TableFieldAnnotationsArgs";
import { TableFieldsArgs } from "./args/TableFieldsArgs";
import { TableSchemaArgs } from "./args/TableSchemaArgs";
export declare class TableRelationsResolver {
    fields(table: Table, ctx: any, info: GraphQLResolveInfo, args: TableFieldsArgs): Promise<Field[]>;
    fieldAnnotations(table: Table, ctx: any, info: GraphQLResolveInfo, args: TableFieldAnnotationsArgs): Promise<FieldAnnotation[]>;
    schema(table: Table, ctx: any, info: GraphQLResolveInfo, args: TableSchemaArgs): Promise<Schema | null>;
}
