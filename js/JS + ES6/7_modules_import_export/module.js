const privateVariable = 42

export const COLOR = '#bababa'

export function compute(a, b) {
  return a + b
}
// export  келесі бетке өткенде {} ішіне жазбаяқ шақырады
export default {    log() {
    console.log(privateVariable)
  }
}
// export default{} келесі бетке өткенде {} ішіне жазбаяқ шақырады
 