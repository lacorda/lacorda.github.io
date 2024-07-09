import React, { useEffect } from 'react';
import { loadjs } from '@site/src/pages/_utils/load';
import { creeateShaderScript, createShader, createProgram } from '../../../_utils/tools';

const Demo = () => {
  const initScript = () => {
    const vertexScript = `
      // 申明一个属性变量，是一个包含4个成分的向量a_position，并从缓冲中获取数据
      // gl_Position在三维空间内为什么有4个成分？
      //   因为前三个成分是x, y, z分量，最后一个成分是w分量
      // 什么是w分量？
      //   在某个视角下的三维图像中，平行的直线也可能相交，这是因为三维世界投射到二维世界有透视关系（深度或者说透视角度，近大远小）
      attribute vec4 a_position;

      void main() {
        // gl_Position是一个内建的变量，表示当前点的位置
        gl_Position = a_position;
      }`;
    const fragmentScript = `
      // 申明一个浮点型，用precision关键字来指定默认精度
      //   lowp:低精度
      //   mediump:中精度
      //   highp:高精度
      precision mediump float;

      void main() {
        // 设置片段着色器的颜色
        //   gl_FragColor是一个内建的变量，表示当前点的颜色
        //   vec4是一个包含4个成分的向量，分别是红、绿、蓝和透明度
        //   所有的颜色值都是0到1之间的浮点数
        //   这里我们返回红色和半透明的紫色
        gl_FragColor = vec4(1, 0, 0.5, 1);
      }`
    creeateShaderScript(vertexScript, fragmentScript);
  }

  const main = () => {
    // 获取一个WebGL上下文
    var canvas = document.querySelector("#c");
    var gl = canvas.getContext("webgl");
    if (!gl) {
      return;
    }

    // 获取顶点着色器和片元着色器的源码
    var vertexShaderSource = document.querySelector("#vertex-shader-2d").text;
    var fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;

    // 创建顶点着色器和片元着色器，返回着色器
    var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    // 创建程序，将顶点着色器和片元着色器附加到程序上，链接程序
    var program = createProgram(gl, vertexShader, fragmentShader);

    // 获取属性值的位置
    var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

    // 创建位置缓冲
    var positionBuffer = gl.createBuffer();

    // 绑定位置缓冲
    // gl.ARRAY_BUFFER: 指向包含顶点数据或颜色数据的缓冲区对象
    // 此段代码是将positionBuffer绑定到顶点Buffer上
    // FIXME: 第一次绑定是为了创建缓冲区，第二次绑定是为了使用缓冲区；
    // Q: 这里的绑定是不是多余的？
    // A: 不是多余的，因为在WebGL中，绑定是一个状态，而不是一个操作。绑定一个缓冲区，就是告诉WebGL，我们要使用这个缓冲区。这是一个代码习惯。但是第一次可以不绑定，直接在第二次绑定的时候使用。
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // 创建三个2d裁剪空间的点
    var positions = [
      0, 0,
      0, 0.5,
      0.7, 0,
    ];
    /**
     * 将数据写入缓冲
     *
     * gl.bufferData(target, data, usage)
     *   target: gl.ARRAY_BUFFER或gl.ELEMENT_ARRAY_BUFFER 绑定点，这里是gl.ARRAY_BUFFER，表示缓冲包含了顶点的数据
     *   data: 要写入缓冲的数据
     *   usage: gl.STATIC_DRAW或gl.DYNAMIC_DRAW或gl.STREAM_DRAW 表示数据的使用方式，这里是gl.STATIC_DRAW，表示数据不会或几乎不会改变
     *
     * Float32Array: 32位浮点数数组：十进制小数0, 0, 0, 0.5, 0.7, 0转换为二进制小数为0, 0, 0, 0.1, 0.1011, 0，在内存中表示为：
     *  0：00000000 00000000 00000000 00000000
     *  0.5：00111111 10000000 00000000 00000000
     *  0.7：00111111 11001100 11001100 11001101
     */
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // 重置画布大小:canvas.width赋值canvas.clientWidth
    webglUtils.resizeCanvasToDisplaySize(gl.canvas);

    /**
     * 设置视口，告诉WebGL如何将裁剪空间映射到屏幕空间
     * gl.viewport(x, y, width, height)
     *  x, y: 视口的左下角坐标
     *  width, height: 视口的宽度和高度
     */
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    /**
     * 清空画布
     * gl.clearColor(red, green, blue, alpha)
     *   red, green, blue, alpha: 0到1之间的浮点数
     * gl.clear(mask)
     *   mask: gl.COLOR_BUFFER_BIT或gl.DEPTH_BUFFER_BIT或gl.STENCIL_BUFFER_BIT
     *   gl.COLOR_BUFFER_BIT表示清空颜色缓冲
     */
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    /**
     * 使用程序
     * gl.useProgram(program)
     *   program: 要使用的程序
     */
    gl.useProgram(program);

    /**
     * 启用属性值
     * gl.enableVertexAttribArray(index)
     *   index: 要启用的属性值的位置
     */
    gl.enableVertexAttribArray(positionAttributeLocation);

    // 绑定位置缓冲
    // gl.ARRAY_BUFFER: 指向包含顶点数据或颜色数据的缓冲区对象
    // 此段代码是将positionBuffer绑定到顶点Buffer上
    // FIXME: 第二次绑定是为了使用缓冲区；
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    var size = 2;
    var type = gl.FLOAT;
    var normalize = false;
    var stride = 0;
    var offset = 0;
    /**
     * gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
     * 绑定当前缓冲区范围到gl.ARRAY_BUFFER, 成为当前顶点缓冲区对象的通用顶点属性并指定它的布局 (缓冲区对象中的偏移量)。
     *   index: 指定要修改的顶点属性的索引
     *   size: 指定每个顶点属性的组成数量，必须是 1，2，3 或 4
     *   type: 指定数组中每个元素的数据类型
     *   normalize: 当转换为浮点数时是否应该将整数数值归一化到特定的范围
     *   stride: 以字节为单位指定连续顶点属性开始之间的偏移量 (即数组中一行长度)。不能大于 255。如果 stride 为 0，则假定该属性是紧密打包的，即不交错属性，每个属性在一个单独的块中，下一个顶点的属性紧跟当前顶点之后。
     *   offset: 指定顶点属性数组中第一部分的字节偏移量。必须是类型的字节长度的倍数
     */
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = 3;
    /**
     * 从向量数组中绘制图元
     * gl.drawArrays(mode, first, count);
     *   mode: 指定绘制的图元类型
     *   first: 指定从哪个点开始绘制
     *   count: 指定绘制需要使用到多少个点
     */
    gl.drawArrays(primitiveType, offset, count);
  }

  useEffect(() => {
    // loadjs();
    // initScript();
  }, [])

  return (
    <div className="webgl-demo">
      <canvas id="c"></canvas>
    </div>
  );
};

export default Demo;