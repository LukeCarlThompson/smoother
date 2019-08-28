// TODO: Add in a velocity parameter to pass to the callback function

/* 
Args
{
  input: 0,
  output: 0,
  damping: effective range 0 - 100
}
*/

function Smoother(...args) {
  this.animating = false;

  // Create an array to hold a reference to all our prop objects
  const propObjects = [];

  // Takes a percent value and returns the number within min/max range.
  // Used to convert the damping to sensible inputs
  const percentToValueBetweenRange = (percent, min, max) =>
    (percent * (max - min)) / 100 + min;

  // var to hold a reference to the animation frame so we can cancel it if need be.
  let animationFrame;

  const defaults = {
    input: 0,
    output: 0,
    velocity: 0,
    damping: 25,
  };

  // Linear interpolation function
  const lerp = (start, end, amt) => start * (1 - amt) + end * amt;

  args.map(arg => {
    // if arg has a propName property then add it to propName array, add the defaults to it and attach it to our springify instance.
    if (typeof arg.propName != "undefined") {
      this[arg.propName] = {};
      this[arg.propName].damping = arg.damping || defaults.damping;
      this[arg.propName].input = arg.input || defaults.input;
      // Create an array to cache the velocity for each object
      this[arg.propName].velocityCache = [];

      // Set the output to start from the input value in case it's not zero
      this[arg.propName].output = this[arg.propName].input;

      // Push the propObject to our propObjects reference array
      propObjects.push(this[arg.propName]);
    } else {
      // Else it must be our callback, so assign that to the this.callback prop.
      this.callback = arg;
    }
  });

  const interpolate = obj => {
    const velocity = (obj.output - obj.input);
    obj.velocityCache.unshift(velocity);
    const sum = obj.velocityCache.reduce((previous, current) => current += previous);
    const avgVelocity = sum / obj.velocityCache.length;
    obj.velocityCache.splice(10);
    const damping = percentToValueBetweenRange(obj.damping, 0.02, 0.3);
    const interpolatedValue = lerp(obj.output, obj.input, damping);
    obj.output = interpolatedValue;
    obj.velocity = avgVelocity;
  };


  const animLoop = () => {
    cancelAnimationFrame(animationFrame);
      
      this.animating = true;
  
      propObjects.forEach(propObject => {
        interpolate(propObject);
      });
  
      // execute the callback function and pass in our prop objects array containing the springified values
      this.callback(...propObjects);
  
      // returns true if each output value has reached the input
      const isFinished = propObjects.every(
        propObject => Math.abs(propObject.output - propObject.input) < 0.5
      );
  
      // If not finished then cancel any queued frame and animate another frame
      if (!isFinished) {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(animLoop);
      } else {
        this.animating = false;
        console.log("finished smoother animation");
      }

  };

  this.animate = () => {
    if (!this.animating) {
      animLoop();
    }
  };
}

export default Smoother;
