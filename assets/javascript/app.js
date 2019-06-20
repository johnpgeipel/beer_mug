let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    dragRotate: true,
  });

let mug = new Zdog.Cylinder ({
    addTo: illo,
    diameter: 80,
    length: 120,
    stroke: false,
    color: "#fe8",
    backface: "#db6",
    rotate: { x: Zdog.TAU/6 },


});

let handle = new Zdog.Ellipse ({
    addTo: mug,
    diameter: 60,
    quarters: 2,
    stroke: 15,
    color: '#ffd',  
    translate: {x: 40},
    rotate: { x: Zdog.TAU/4 },
})

let head = new Zdog.Hemisphere ({
    addTo: mug,
    diameter: 80,
    color: '#fff',  
    translate: {z: 60},
    
})

let bubble1 =  new Zdog.Ellipse ({
    addTo : head,
    diameter: 40,
    stroke: 40,
    color: "#fff",
    translate: {x: -30, z: 20},
})

let bubble2 =  new Zdog.Ellipse ({
    addTo : bubble1,
    diameter: 20,
    stroke: 30,
    color: "#fff",
    translate: {x: -70, z: 10},
})

let bubble3 =  new Zdog.Ellipse ({
    addTo : bubble2,
    diameter: 5,
    stroke: 20,
    color: "#fff",
    translate: {x: -40, z: 4},
})
// let foam1 = new Zdog.Hemisphere ({
//     addTo: head,
//     diameter: 80,
//     color: '#fff',  
//     translate: {y: 10},
//     rotate: { x: Zdog.TAU/-4 },
    
// })



// let foam2 = new Zdog.Hemisphere ({
//     addTo: head,
//     diameter: 40,
//     color: '#fff',  
//     translate: {y: 55 , z: -30},

//     rotate: { x: Zdog.TAU/-4 },
    
// })











function animate() {
// rotate illo each frame
illo.rotate.y += 0.01;
illo.updateRenderGraph();
// animate next frame
requestAnimationFrame( animate );
}


// start animation
animate();


illo.updateRenderGraph();