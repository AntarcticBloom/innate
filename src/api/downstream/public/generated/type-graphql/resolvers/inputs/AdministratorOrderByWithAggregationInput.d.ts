import { AdministratorCountOrderByAggregateInput } from "../inputs/AdministratorCountOrderByAggregateInput";
import { AdministratorMaxOrderByAggregateInput } from "../inputs/AdministratorMaxOrderByAggregateInput";
import { AdministratorMinOrderByAggregateInput } from "../inputs/AdministratorMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class AdministratorOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    banned?: SortOrderInput | undefined;
    username?: "asc" | "desc" | undefined;
    verified?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: AdministratorCountOrderByAggregateInput | undefined;
    _max?: AdministratorMaxOrderByAggregateInput | undefined;
    _min?: AdministratorMinOrderByAggregateInput | undefined;
}
