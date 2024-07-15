import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTableOrThrowArgs } from "./args/FindUniqueTableOrThrowArgs";
import { Table } from "../../../models/Table";
export declare class FindUniqueTableOrThrowResolver {
    getTable(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTableOrThrowArgs): Promise<Table | null>;
}
