import type { GraphQLResolveInfo } from "graphql";
import { AggregateAdministratorArgs } from "./args/AggregateAdministratorArgs";
import { AggregateAdministrator } from "../../outputs/AggregateAdministrator";
export declare class AggregateAdministratorResolver {
    aggregateAdministrator(ctx: any, info: GraphQLResolveInfo, args: AggregateAdministratorArgs): Promise<AggregateAdministrator>;
}
