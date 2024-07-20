import { TableOrderByWithRelationInput } from "../../../inputs/TableOrderByWithRelationInput";
import { TableWhereInput } from "../../../inputs/TableWhereInput";
import { TableWhereUniqueInput } from "../../../inputs/TableWhereUniqueInput";
export declare class FindFirstTableArgs {
    where?: TableWhereInput | undefined;
    orderBy?: TableOrderByWithRelationInput[] | undefined;
    cursor?: TableWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "schemaId" | "name" | "modelName" | "relations" | "createdAt" | "updatedAt"> | undefined;
}
