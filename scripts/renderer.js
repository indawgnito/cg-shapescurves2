class Renderer {
  // canvas:              object ({id: __, width: __, height: __})
  // num_curve_sections:  int
  constructor(canvas, num_curve_sections, show_points_flag) {
    this.canvas = document.getElementById(canvas.id);
    this.canvas.width = canvas.width;
    this.canvas.height = canvas.height;
    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
    this.slide_idx = 0;
    this.num_curve_sections = num_curve_sections;
    this.show_points = show_points_flag;
  }

  // n:  int
  setNumCurveSections(n) {
    this.num_curve_sections = n;
    this.drawSlide(this.slide_idx);
  }

  // flag:  bool
  showPoints(flag) {
    this.show_points = flag;
    this.drawSlide(this.slide_idx);
  }

  // slide_idx:  int
  drawSlide(slide_idx) {
    this.slide_idx = slide_idx;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let framebuffer = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    switch (this.slide_idx) {
      case 0:
        this.drawSlide0(framebuffer);
        break;
      case 1:
        this.drawSlide1(framebuffer);
        break;
      case 2:
        this.drawSlide2(framebuffer);
        break;
      case 3:
        this.drawSlide3(framebuffer);
        break;
    }

    this.ctx.putImageData(framebuffer, 0, 0);
  }

  // framebuffer:  canvas ctx image data
  drawSlide0(framebuffer) {
    // TODO: draw at least 2 Bezier curves
    //   - variable `this.num_curve_sections` should be used for `num_edges`
    //   - variable `this.show_points` should be used to determine whether or not to render vertices

    // Following line is example of drawing a single line
    // (this should be removed after you implement the curve)
    this.drawBezierCurve(
      { x: 200, y: 200 },
      { x: 200, y: 300 },
      { x: 400, y: 150 },
      { x: 400, y: 300 },
      this.num_curve_sections,
      [255, 0, 100, 255],
      framebuffer
    );

    this.drawBezierCurve(
      { x: 400, y: 400 },
      { x: 500, y: 500 },
      { x: 600, y: 600 },
      { x: 700, y: 200 },
      this.num_curve_sections,
      [100, 0, 255, 255],
      framebuffer
    );
  }

  // framebuffer:  canvas ctx image data
  drawSlide1(framebuffer) {
    // TODO: draw at least 2 circles
    //   - variable `this.num_curve_sections` should be used for `num_edges`
    //   - variable `this.show_points` should be used to determine whether or not to render vertices

    this.drawCircle(
      { x: 500, y: 400 },
      150,
      this.num_curve_sections,
      [100, 0, 0, 255],
      framebuffer
    );

    this.drawCircle(
      { x: 200, y: 200 },
      50,
      this.num_curve_sections,
      [100, 90, 200, 255],
      framebuffer
    );
  }

  // framebuffer:  canvas ctx image data
  drawSlide2(framebuffer) {
    // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
    //   - variable `this.show_points` should be used to determine whether or not to render vertices

    // draw sky
    this.drawConvexPolygon(
      [
        { x: 20, y: 70 },
        { x: 20, y: 340 },
        { x: 400, y: 340 },
        { x: 400, y: 70 },
      ],
      [0, 200, 240, 255],
      framebuffer
    );

    // draw house
    this.drawConvexPolygon(
      [
        { x: 100, y: 100 },
        { x: 100, y: 200 },
        { x: 150, y: 250 },
        { x: 200, y: 200 },
        { x: 200, y: 100 },
      ],
      [200, 100, 100, 255],
      framebuffer
    );

    // draw grass
    this.drawConvexPolygon(
      [
        { x: 20, y: 70 },
        { x: 20, y: 100 },
        { x: 400, y: 100 },
        { x: 400, y: 70 },
      ],
      [20, 200, 10, 255],
      framebuffer
    );

    // draw sun
    this.drawConvexPolygon(
      [
        { x: 250, y: 250 },
        { x: 250, y: 300 },
        { x: 300, y: 300 },
        { x: 300, y: 250 },
      ],
      [250, 250, 0, 255],
      framebuffer
    );

    // complex convex polygon for example
    this.drawConvexPolygon(
      [
        { x: 535, y: 410 },
        { x: 575, y: 360 },
        { x: 610, y: 400 },
        { x: 630, y: 450 },
        { x: 600, y: 500 },
        { x: 500, y: 500 },
      ],
      [100, 100, 100, 255],
      framebuffer
    );

    // another complex convex polygon for example
    this.drawConvexPolygon(
      [
        { x: 500, y: 100 },
        { x: 550, y: 80 },
        { x: 600, y: 100 },
        { x: 650, y: 200 },
        { x: 600, y: 240 },
        { x: 575, y: 250 },
        { x: 520, y: 200 },
      ],
      [200, 200, 200, 255],
      framebuffer
    );
  }

  // framebuffer:  canvas ctx image data
  drawSlide3(framebuffer) {
    // TODO: draw your name!
    //   - variable `this.num_curve_sections` should be used for `num_edges`
    //   - variable `this.show_points` should be used to determine whether or not to render vertices

    // draw vertical line for back of letter B
    this.drawLine(
      { x: 50, y: 200 },
      { x: 50, y: 400 },
      [0, 0, 0, 255],
      framebuffer
    );

    // draw top of letter B
    this.drawBezierCurve(
      { x: 50, y: 400 },
      { x: 150, y: 410 },
      { x: 150, y: 300 },
      { x: 50, y: 300 },
      this.num_curve_sections,
      [0, 0, 0, 255],
      framebuffer
    );

    // draw bottom of letter B
    this.drawBezierCurve(
      { x: 50, y: 300 },
      { x: 160, y: 310 },
      { x: 160, y: 190 },
      { x: 50, y: 200 },
      this.num_curve_sections,
      [0, 0, 0, 255],
      framebuffer
    );

    // draw curve of letter e
    this.drawBezierCurve(
      { x: 210, y: 255 },
      { x: 175, y: 350 },
      { x: 155, y: 155 },
      { x: 210, y: 220 },
      this.num_curve_sections,
      [0, 0, 0, 255],
      framebuffer
    );

    // draw horizontal line of letter e
    this.drawLine(
      { x: 210, y: 255 },
      { x: 170, y: 255 },
      [0, 0, 0, 255],
      framebuffer
    );

    // draw vertical line of letter n
    this.drawLine(
      { x: 250, y: 205 },
      { x: 250, y: 280 },
      [0, 0, 0, 255],
      framebuffer
    );

    // draw curve for letter n
    this.drawBezierCurve(
      { x: 250, y: 255 },
      { x: 265, y: 300 },
      { x: 305, y: 290 },
      { x: 300, y: 205 },
      this.num_curve_sections,
      [0, 0, 0, 255],
      framebuffer
    );

    // draw curve for letter j
    this.drawBezierCurve(
      { x: 350, y: 280 },
      { x: 360, y: 150 },
      { x: 320, y: 180 },
      { x: 320, y: 200 },
      this.num_curve_sections,
      [0, 0, 0, 255],
      framebuffer
    );

    // draw dot for letter j
    this.drawConvexPolygon(
      [
        { x: 347, y: 291 },
        { x: 347, y: 294 },
        { x: 350, y: 294 },
        { x: 350, y: 291 },
      ],
      [0, 0, 0, 255],
      framebuffer
    );

    // draw vertical line of letter a
    this.drawLine(
      { x: 425, y: 200 },
      { x: 420, y: 260 },
      [0, 0, 0, 255],
      framebuffer
    );

    // draw curve of letter a
    this.drawBezierCurve(
      { x: 420, y: 250 },
      { x: 400, y: 310 },
      { x: 370, y: 170 },
      { x: 425, y: 215 },
      this.num_curve_sections,
      [0, 0, 0, 255],
      framebuffer
    );

    // draw vertical line of letter m
    this.drawLine(
      { x: 250, y: 205 },
      { x: 250, y: 280 },
      [0, 0, 0, 255],
      framebuffer
    );

    // draw curve one for letter m
    this.drawBezierCurve(
      { x: 250, y: 255 },
      { x: 265, y: 300 },
      { x: 305, y: 290 },
      { x: 300, y: 205 },
      this.num_curve_sections,
      [0, 0, 0, 255],
      framebuffer
    );

    // draw curve two for letter m
    this.drawBezierCurve(
      { x: 250, y: 255 },
      { x: 265, y: 300 },
      { x: 305, y: 290 },
      { x: 300, y: 205 },
      this.num_curve_sections,
      [0, 0, 0, 255],
      framebuffer
    );
  }

  // p0:           object {x: __, y: __}
  // p1:           object {x: __, y: __}
  // p2:           object {x: __, y: __}
  // p3:           object {x: __, y: __}
  // num_edges:    int
  // color:        array of int [R, G, B, A]
  // framebuffer:  canvas ctx image data
  drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
    // TODO: draw a sequence of straight lines to approximate a Bezier curve

    // divide the maximum t value by the number of line segments
    let dt = 1 / num_edges;
    console.log("DT: ", dt);

    // counters to keep track of how far we are
    let x = p0.x;
    let y = p0.y;
    let t = 0;

    for (let i = 0; i < num_edges; i++) {
      // increment t value
      t += dt;

      // calculate new_x and new_y
      let new_x =
        (1 - t) ** 3 * p0.x +
        3 * (1 - t) ** 2 * t * p1.x +
        3 * (1 - t) * t ** 2 * p2.x +
        t ** 3 * p3.x;

      let new_y =
        (1 - t) ** 3 * p0.y +
        3 * (1 - t) ** 2 * t * p1.y +
        3 * (1 - t) * t ** 2 * p2.y +
        t ** 3 * p3.y;

      console.log(color);

      // draw line from (x, y) to (new_x, new_y)
      // and remember that line function only accepts integers
      this.drawLine(
        { x: Math.floor(x), y: Math.floor(y) },
        { x: Math.floor(new_x), y: Math.floor(new_y) },
        color,
        framebuffer
      );

      // update x and y variables
      x = new_x;
      y = new_y;
    }
  }

  // center:       object {x: __, y: __}
  // radius:       int
  // num_edges:    int
  // color:        array of int [R, G, B, A]
  // framebuffer:  canvas ctx image data
  drawCircle(center, radius, num_edges, color, framebuffer) {
    // TODO: draw a sequence of straight lines to approximate a circle

    // remember that center and radius remain constant for the circle

    // change in theta (angle)
    let dt = (2 * Math.PI) / num_edges;

    // counter to keep track of current angle in radians
    let t = 0;

    // calculate and initialize x and y
    let x = center.x + radius * Math.cos(t);
    let y = center.y + radius * Math.sin(t);

    for (let i = 0; i < num_edges; i++) {
      // increment t by dt
      t += dt;

      // calculate new x and new y
      let new_x = center.x + radius * Math.cos(t);
      let new_y = center.y + radius * Math.sin(t);

      // draw line from (x, y) to (new_x, new_y)
      // again I gotta remember that drawLine only accepts ints
      this.drawLine(
        { x: Math.floor(x), y: Math.floor(y) },
        { x: Math.floor(new_x), y: Math.floor(new_y) },
        color,
        framebuffer
      );

      // update x and y values
      x = new_x;
      y = new_y;
    }
  }

  // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
  // color:        array of int [R, G, B, A]
  // framebuffer:  canvas ctx image data
  drawConvexPolygon(vertex_list, color, framebuffer) {
    // TODO: draw a sequence of triangles to form a convex polygon

    for (let i = 0; i < vertex_list.length - 1; i++) {
      // draw a triangle between the point at index zero
      // and two other points which connect to each other

      this.drawTriangle(
        { x: vertex_list[0].x, y: vertex_list[0].y },
        { x: vertex_list[i].x, y: vertex_list[i].y },
        { x: vertex_list[i + 1].x, y: vertex_list[i + 1].y },
        color,
        framebuffer
      );
    }
  }

  // v:            object {x: __, y: __}
  // color:        array of int [R, G, B, A]
  // framebuffer:  canvas ctx image data
  drawVertex(v, color, framebuffer) {
    // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
  }

  /***************************************************************
   ***       Basic Line and Triangle Drawing Routines          ***
   ***       (code provided from in-class activities)          ***
   ***************************************************************/
  pixelIndex(x, y, framebuffer) {
    return 4 * y * framebuffer.width + 4 * x;
  }

  setFramebufferColor(color, x, y, framebuffer) {
    let p_idx = this.pixelIndex(x, y, framebuffer);
    for (let i = 0; i < 4; i++) {
      framebuffer.data[p_idx + i] = color[i];
    }
  }

  swapPoints(a, b) {
    let tmp = { x: a.x, y: a.y };
    a.x = b.x;
    a.y = b.y;
    b.x = tmp.x;
    b.y = tmp.y;
  }

  drawLine(p0, p1, color, framebuffer) {
    if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) {
      // |m| <= 1
      if (p0.x < p1.x) {
        this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
      } else {
        this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
      }
    } else {
      // |m| > 1
      if (p0.y < p1.y) {
        this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
      } else {
        this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
      }
    }
  }

  drawLineLow(x0, y0, x1, y1, color, framebuffer) {
    let A = y1 - y0;
    let B = x0 - x1;
    let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
    if (A < 0) {
      iy = -1;
      A *= -1;
    }
    let D = 2 * A + B;
    let D0 = 2 * A;
    let D1 = 2 * A + 2 * B;

    let y = y0;
    for (let x = x0; x <= x1; x++) {
      this.setFramebufferColor(color, x, y, framebuffer);
      if (D <= 0) {
        D += D0;
      } else {
        D += D1;
        y += iy;
      }
    }
  }

  drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
    let A = x1 - x0;
    let B = y0 - y1;
    let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
    if (A < 0) {
      ix = -1;
      A *= -1;
    }
    let D = 2 * A + B;
    let D0 = 2 * A;
    let D1 = 2 * A + 2 * B;

    let x = x0;
    for (let y = y0; y <= y1; y++) {
      this.setFramebufferColor(color, x, y, framebuffer);
      if (D <= 0) {
        D += D0;
      } else {
        D += D1;
        x += ix;
      }
    }
  }

  drawTriangle(p0, p1, p2, color, framebuffer) {
    // Deep copy, then sort points in ascending y order
    p0 = { x: p0.x, y: p0.y };
    p1 = { x: p1.x, y: p1.y };
    p2 = { x: p2.x, y: p2.y };
    if (p1.y < p0.y) this.swapPoints(p0, p1);
    if (p2.y < p0.y) this.swapPoints(p0, p2);
    if (p2.y < p1.y) this.swapPoints(p1, p2);

    // Edge coherence triangle algorithm
    // Create initial edge table
    let edge_table = [
      { x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y) }, // edge01
      { x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y) }, // edge02
      { x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y) }, // edge12
    ];

    // Do cross product to determine if pt1 is to the right/left of edge02
    let v01 = { x: p1.x - p0.x, y: p1.y - p0.y };
    let v02 = { x: p2.x - p0.x, y: p2.y - p0.y };
    let p1_right = v01.x * v02.y - v01.y * v02.x >= 0;

    // Get the left and right edges from the edge table (lower half of triangle)
    let left_edge, right_edge;
    if (p1_right) {
      left_edge = edge_table[1];
      right_edge = edge_table[0];
    } else {
      left_edge = edge_table[0];
      right_edge = edge_table[1];
    }
    // Draw horizontal lines (lower half of triangle)
    for (let y = p0.y; y < p1.y; y++) {
      let left_x = parseInt(left_edge.x) + 1;
      let right_x = parseInt(right_edge.x);
      if (left_x <= right_x) {
        this.drawLine(
          { x: left_x, y: y },
          { x: right_x, y: y },
          color,
          framebuffer
        );
      }
      left_edge.x += left_edge.inv_slope;
      right_edge.x += right_edge.inv_slope;
    }

    // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
    if (p1_right) {
      right_edge = edge_table[2];
    } else {
      left_edge = edge_table[2];
    }
    // Draw horizontal lines (upper half of triangle)
    for (let y = p1.y; y < p2.y; y++) {
      let left_x = parseInt(left_edge.x) + 1;
      let right_x = parseInt(right_edge.x);
      if (left_x <= right_x) {
        this.drawLine(
          { x: left_x, y: y },
          { x: right_x, y: y },
          color,
          framebuffer
        );
      }
      left_edge.x += left_edge.inv_slope;
      right_edge.x += right_edge.inv_slope;
    }
  }
}

export { Renderer };
