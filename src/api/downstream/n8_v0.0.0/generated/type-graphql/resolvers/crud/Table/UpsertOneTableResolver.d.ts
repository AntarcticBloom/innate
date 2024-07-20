import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTableArgs } from "./args/UpsertOneTableArgs";
import { Table } from "../../../models/Table";
export declare class UpsertOneTableResolver {
    upsertOneTable(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTableArgs): Promise<Table>;
}
