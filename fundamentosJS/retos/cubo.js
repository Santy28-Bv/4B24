
function createCube(size) {
  const space = ' ';
  const faceA= '/\\';
  const backA = '_\\';
  const faceB = '\\/';
  const backB = '_/';
  let cubeA= '';
  let cubeB= '';
  
  for(let i=0;i<size; i++){
    let line=space.repeat(i);
    line += faceA.repeat(size-i);
    line += backA.repeat(size);
    let lineB = space.repeat(i);
    lineB+=faceB.repeat(size -i);
    lineB+=backB.repeat(size);
    if(i !== 0){
      cubeA = line + '\n' + cubeA + '\n' + lineB
    }
    else{
      cubeA= line  + cubeA + '\n' + lineB
    }
     

  };
  console.log(cubeA);
  return '';
};

const cube = createCube(3);
console.log(cube);
