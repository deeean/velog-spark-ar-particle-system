import Scene from 'Scene';
import Animation from "Animation";

(async function () {
  const emitter0 = await Scene.root.findFirst('emitter0');

  emitter0.sizeModifier = Animation.samplers.easeInOutSine(0.0, -0.1);
  emitter0.hsvaColorModulationModifier = Animation.samplers.HSVA([
    Animation.samplers.constant(1),
    Animation.samplers.constant(1),
    Animation.samplers.constant(1),
    Animation.samplers.easeInOutSine(1, 0),
  ]);
})();
