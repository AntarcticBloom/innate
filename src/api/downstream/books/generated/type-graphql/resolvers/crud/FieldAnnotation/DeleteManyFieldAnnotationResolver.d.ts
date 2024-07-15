import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyFieldAnnotationArgs } from "./args/DeleteManyFieldAnnotationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyFieldAnnotationResolver {
    deleteManyFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFieldAnnotationArgs): Promise<AffectedRowsOutput>;
}
