import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTableArgs } from "./args/DeleteOneTableArgs";
import { Table } from "../../../models/Table";
export declare class DeleteOneTableResolver {
    deleteOneTable(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTableArgs): Promise<Table | null>;
}
