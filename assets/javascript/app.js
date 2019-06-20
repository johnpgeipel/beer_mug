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
    color: "#fb0",
    backface: "#f62",
    rotate: { x: Zdog.TAU/6 },


});

let handle = new Zdog.Ellipse ({
    addTo: mug,
    diameter: 60,
    quarters: 2,
    stroke: 15,
    color: 'rgb(233, 220, 186)',  
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

let bubble1a =  new Zdog.Cylinder ({
    addTo : bubble1,
    diameter: 55,
    height: 1,
    // stroke: 30,
    color: "rgb(233, 220, 186, 0.45)",
    translate: { z: -19},
})

let bubble2 =  new Zdog.Ellipse ({
    addTo : bubble1,
    diameter: 20,
    stroke: 30,
    color: "#fff",
    translate: {x: -70, z: 10},
})

let bubble2a =  new Zdog.Cylinder({
    addTo : bubble2,
    diameter: 30,
    height: 1,
    // stroke: 30,
    color: "rgb(233, 220, 186, 0.45)",
    translate: { z: -13},
})

let bubble3 =  new Zdog.Ellipse ({
    addTo : bubble2,
    diameter: 12,
    stroke: 12,
    color: "#fff",
    translate: {x: -40, z: 4},
})

let bubble4 =  new Zdog.Cylinder ({
    addTo : bubble3,
    diameter: 15,
    height: 1,
    // stroke: 30,
    color: "rgb(233, 220, 186, 0.45)",
    translate: { z: -6},
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