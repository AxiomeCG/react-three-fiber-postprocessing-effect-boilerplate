import {Effect} from 'postprocessing';
import {forwardRef, useMemo} from 'react';
import {Uniform} from 'three';

const fragmentShader = `

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    outputColor = inputColor;
}
  `


class RippleEffect extends Effect {
  constructor({}) {

    super('RippleEffect', fragmentShader, {
      uniforms: new Map([
        ['uTime', new Uniform(0)],
      ]),
    });
  }
}


export const Ripple = forwardRef(({}, ref) => {
  const effect = useMemo(() => new RippleEffect({
  }), [])

  return <primitive ref={ref} object={effect} dispose={null}/>
})
