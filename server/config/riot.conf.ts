const riotConst = require(`../constants/${process.env.NODE_ENV}/riot.json`);
const {
    Kayn,
    REGIONS,
    METHOD_NAMES,
    BasicJSCache,
    RedisCache,
  } = require('kayn');

export class RiotConfig {
    static api: any;
    static init(): void {
        this.api = Kayn(riotConst.key)();
    }
}