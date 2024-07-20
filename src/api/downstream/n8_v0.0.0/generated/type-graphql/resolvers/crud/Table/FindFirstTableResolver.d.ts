import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTableArgs } from "./args/FindFirstTableArgs";
import { Table } from "../../../models/Table";
export declare class FindFirstTableResolver {
    findFirstTable(ctx: any, info: GraphQLResolveInfo, args: FindFirstTableArgs): Promise<Table | null>;
}
