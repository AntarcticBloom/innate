import { RevokedRefreshTokenCountOrderByAggregateInput } from "../inputs/RevokedRefreshTokenCountOrderByAggregateInput";
import { RevokedRefreshTokenMaxOrderByAggregateInput } from "../inputs/RevokedRefreshTokenMaxOrderByAggregateInput";
import { RevokedRefreshTokenMinOrderByAggregateInput } from "../inputs/RevokedRefreshTokenMinOrderByAggregateInput";
export declare class RevokedRefreshTokenOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    value?: "asc" | "desc" | undefined;
    actualExpiration?: "asc" | "desc" | undefined;
    _count?: RevokedRefreshTokenCountOrderByAggregateInput | undefined;
    _max?: RevokedRefreshTokenMaxOrderByAggregateInput | undefined;
    _min?: RevokedRefreshTokenMinOrderByAggregateInput | undefined;
}
