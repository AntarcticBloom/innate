import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTableOrThrowArgs } from "./args/FindFirstTableOrThrowArgs";
import { Table } from "../../../models/Table";
export declare class FindFirstTableOrThrowResolver {
    findFirstTableOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTableOrThrowArgs): Promise<Table | null>;
}
