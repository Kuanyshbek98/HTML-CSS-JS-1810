// import MyLog, {COLOR, compute} from './module' // {} export-тың ішіндегілер шақыру үшін
import * as Module from "./module";

// compute(1, 2)  //export-тың ішіндегілер шақыру үшін
// console.log(COLOR) //export-тың ішіндегілер шақыру үшін
// MyLog.log() // export default{} -тың ішіндегілер

Module.default.log(); // export default{} -тың ішіндегілер шақыру үшін 2 тәсіл
