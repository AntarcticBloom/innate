import { RevokedRefreshTokenOrderByWithRelationInput } from "../../../inputs/RevokedRefreshTokenOrderByWithRelationInput";
import { RevokedRefreshTokenWhereInput } from "../../../inputs/RevokedRefreshTokenWhereInput";
import { RevokedRefreshTokenWhereUniqueInput } from "../../../inputs/RevokedRefreshTokenWhereUniqueInput";
export declare class FindManyRevokedRefreshTokenArgs {
    where?: RevokedRefreshTokenWhereInput | undefined;
    orderBy?: RevokedRefreshTokenOrderByWithRelationInput[] | undefined;
    cursor?: RevokedRefreshTokenWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "value" | "actualExpiration"> | undefined;
}
