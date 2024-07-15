import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTableArgs } from "./args/UpdateOneTableArgs";
import { Table } from "../../../models/Table";
export declare class UpdateOneTableResolver {
    updateOneTable(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTableArgs): Promise<Table | null>;
}
