import type { GraphQLResolveInfo } from "graphql";
import { Schema } from "../../../models/Schema";
import { Table } from "../../../models/Table";
import { SchemaTablesArgs } from "./args/SchemaTablesArgs";
export declare class SchemaRelationsResolver {
    tables(schema: Schema, ctx: any, info: GraphQLResolveInfo, args: SchemaTablesArgs): Promise<Table[]>;
}
