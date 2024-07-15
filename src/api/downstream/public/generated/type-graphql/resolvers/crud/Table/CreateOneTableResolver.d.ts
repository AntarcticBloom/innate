import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTableArgs } from "./args/CreateOneTableArgs";
import { Table } from "../../../models/Table";
export declare class CreateOneTableResolver {
    createOneTable(ctx: any, info: GraphQLResolveInfo, args: CreateOneTableArgs): Promise<Table>;
}
