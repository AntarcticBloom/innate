import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTableArgs } from "./args/FindUniqueTableArgs";
import { Table } from "../../../models/Table";
export declare class FindUniqueTableResolver {
    table(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTableArgs): Promise<Table | null>;
}
