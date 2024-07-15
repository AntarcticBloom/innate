import type { GraphQLResolveInfo } from "graphql";
import { AggregateFieldAnnotationArgs } from "./args/AggregateFieldAnnotationArgs";
import { AggregateFieldAnnotation } from "../../outputs/AggregateFieldAnnotation";
export declare class AggregateFieldAnnotationResolver {
    aggregateFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: AggregateFieldAnnotationArgs): Promise<AggregateFieldAnnotation>;
}
