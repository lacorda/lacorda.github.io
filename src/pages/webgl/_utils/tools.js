import { createLocalScript } from '@site/src/pages/_utils/load';

// 顶点着色器
export const createVertexScript = (text) => {
  createLocalScript({
    id: "vertex-shader-2d",
    type: "notjs"
  }, text)
}

// 片段着色器
export const createFragmentScript = (text) => {
  createLocalScript({
    id: "fragment-shader-2d",
    type: "notjs"
  }, text)
}

export const creeateShaderScript = (...args) => {
  createVertexScript(args[0]);
  createFragmentScript(args[1]);

  return args;
}

/**
   * 创建着色器
   * @param {WebGLRenderingContext} gl WebGL上下文
   * @param {number} type gl.VERTEX_SHADER 或 gl.FRAGMENT_SHADER两者中的一个
   * @param {string} source GLSL源码
   * 1.创建着色器shader
   * 2.将GLSL源码上传到着色器
   * 3.编译着色器
   * 4.获取着色器的编译状态，成功，则返回着色器；失败，则删除着色器
   */
export function createShader(gl, type, source) {
  // gl.createShader(type)创建一个着色器
  var shader = gl.createShader(type);

  // gl.shaderSource(shader, source)将GLSL源码上传到着色器
  gl.shaderSource(shader, source);
  // gl.compileShader(shader)编译着色器
  gl.compileShader(shader);
  // gl.getShaderParameter(shader, pname)获取着色器的信息
  // gl.COMPILE_STATUS表示编译状态
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  // gl.getShaderInfoLog(shader)获取着色器的日志信息
  console.log(gl.getShaderInfoLog(shader));
  // gl.deleteShader(shader)删除着色器
  gl.deleteShader(shader);
}

/**
 * 创建程序
 * @param {WebGLRenderingContext} gl WebGL上下文
 * @param {WebGLShader} vertexShader 顶点着色器
 * @param {WebGLShader} fragmentShader 片元着色器
 * 1.创建一个程序
 * 2.将顶点着色器和片元着色器附加到程序上
 * 3.链接程序
 * 4.获取程序的链接状态，成功，则返回程序；失败，则删除程序
 */
export function createProgram(gl, vertexShader, fragmentShader) {
  // gl.createProgram()创建一个程序
  var program = gl.createProgram();
  // gl.attachShader(program, shader)将着色器附加到程序上
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  // gl.linkProgram(program)链接程序，从而完成为程序的片元和顶点着色器准备 GPU 代码的过程。
  gl.linkProgram(program);
  // gl.getProgramParameter(program, pname)获取程序的信息
  // gl.LINK_STATUS表示链接状态
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  // gl.getProgramInfoLog(program)获取程序的日志信息
  console.log(gl.getProgramInfoLog(program));
  // gl.deleteProgram(program)删除程序
  gl.deleteProgram(program);
}
