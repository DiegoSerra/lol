const riotConst = require(`../constants/${process.env.NODE_ENV}/riot.json`);
const {
    Kayn,
    REGIONS,
    METHOD_NAMES,
    BasicJSCache,
    RedisCache,
  } = require('kayn');

export class RiotConfig {
    static kayn: any;
    static init(): void {
        this.kayn = Kayn(riotConst.key)();
    }
}