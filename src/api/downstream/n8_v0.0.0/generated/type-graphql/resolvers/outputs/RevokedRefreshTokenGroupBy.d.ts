import { RevokedRefreshTokenCountAggregate } from "../outputs/RevokedRefreshTokenCountAggregate";
import { RevokedRefreshTokenMaxAggregate } from "../outputs/RevokedRefreshTokenMaxAggregate";
import { RevokedRefreshTokenMinAggregate } from "../outputs/RevokedRefreshTokenMinAggregate";
export declare class RevokedRefreshTokenGroupBy {
    id: string;
    value: string;
    actualExpiration: Date;
    _count: RevokedRefreshTokenCountAggregate | null;
    _min: RevokedRefreshTokenMinAggregate | null;
    _max: RevokedRefreshTokenMaxAggregate | null;
}
