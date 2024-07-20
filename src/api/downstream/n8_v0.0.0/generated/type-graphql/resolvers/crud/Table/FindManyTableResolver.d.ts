import type { GraphQLResolveInfo } from "graphql";
import { FindManyTableArgs } from "./args/FindManyTableArgs";
import { Table } from "../../../models/Table";
export declare class FindManyTableResolver {
    tables(ctx: any, info: GraphQLResolveInfo, args: FindManyTableArgs): Promise<Table[]>;
}
