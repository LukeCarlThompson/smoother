# Smoother
### A linear interpolation function for smoothing interactions

```javascript
const smoother = new Smoother(
  {
    input: 0, // start from this number
    propName: "x", // name the prop to be passed into the callback
    damping: 25, // Set the damping (smoothing) 1 - 100 effective range
  },
  {
    input: 0,
    propName: "y",
    damping: 25,
  },
  function(x, y) {
    // Do something with these interpolated values
    x.output
    x.velocity

    y.output
    y.velocity
  }
);

// Update the inputs and call animation to start.
 document.addEventListener('mousemove', (e) => {
     smoother.x.input = e.clientX;
     smoother.y.input = e.clientY;
     boxRoll.animate();
 });
 ```

 ## Build setup

It uses gulp, scss, browserSync, Rollup and buble.

### Folder structure
**_src/** - is where you work  
**docs/** - is where the browserSync server runs from  
**dist/** - contains the processed js files  


### Get started
1. `nvm use` - use correct node version if using nvm
2. `npm install` - install dependencies
3. `npm run dev` - spins up the dev server
4. `npm run build` - transpiles and builds final js files in dist/ folder
