import React, { createRef, useEffect } from "react";
import Header from "../layout/Header";
import { scrollTop, changeTitle } from "../../snippets";

const Drawing = () => {
  const canvasRef = createRef();

  let mousePressed = false;
  let brushType = "round";
  let brushSize = "4";
  let brushColor = "#000";

  const types = ["square", "round"];
  const sizes = ["2", "4", "8", "16", "32"];
  const colors = [
    "#000",
    "#333",
    "#808080",
    "#2626aa",
    "#437cc7",
    "#6acbf1",
    "#d81b1b",
    "#ffab2d",
    "#fffb22",
    "#2f6917",
    "#2bb12b",
    "#8afd47",
    "#6b1685",
    "#9040d1",
    "#e6a4d7",
    "#864121",
    "#db7133",
    "#fff",
  ];

  let clearCanvas;

  const addSelectedClass = (element) => {
    const buttons = document.querySelectorAll(`.${element.classList[1]}`);

    buttons.forEach((button) => {
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
      }
    });

    element.classList.add("selected");
  };

  // Download Image
  const downloadImage = (el) => {
    let img = canvasRef.current.toDataURL("image/png");
    el.target.href = img;
  };

  useEffect(() => {
    scrollTop();
    changeTitle("Çizim");

    // Get Canvas Element and Set Its Size
    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = canvasRef.current.parentElement.offsetWidth;
    canvasRef.current.height = "600";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // Get mouse coordinates
    const getMouseCoordinates = (c, e) => {
      let rect = c.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvasRef.current.addEventListener("mousemove", (e) => {
      let mousePos = getMouseCoordinates(canvasRef.current, e);
      draw(mousePos.x, mousePos.y);
    });

    // Mouse Pressed
    canvasRef.current.addEventListener("mousedown", (e) => {
      if (e.button === 0) {
        mousePressed = true;
        let mousePos = getMouseCoordinates(canvasRef.current, e);
        draw(mousePos.x, mousePos.y);
      }
    });

    // Mouse Not Pressed
    canvasRef.current.addEventListener("mouseup", (e) => {
      if (e.button === 0) {
        mousePressed = false;
        ctx.beginPath();
      }
    });

    // Draw
    const draw = (x, y) => {
      if (mousePressed) {
        ctx.lineWidth = +brushSize;
        ctx.lineCap = brushType;
        ctx.strokeStyle = brushColor;
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    };

    // Clear Canvas
    clearCanvas = () => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page drawing-page">
      <Header
        header={{
          title: "Çizim",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/cizim", "Çizim"],
          ],
          color: "#ffee5b",
        }}
      />

      <div className="drawing-container" data-aos="fade-up">
        <div className="toolbox">
          <div className="brush-type-container">
            <p>Fırça Tipi</p>
            {types.map((type, index) => (
              <button
                key={index}
                className={
                  type === brushType
                    ? "toolbox-btn bt-btn selected"
                    : "toolbox-btn bt-btn"
                }
                style={{
                  backgroundColor: "#000",
                  borderRadius: `${type === "round" ? "50%" : "0px"}`,
                }}
                onClick={(e) => {
                  brushType = type;
                  addSelectedClass(e.target);
                }}
              ></button>
            ))}
          </div>
          <div className="brush-size-container">
            <p>Fırça Boyu</p>
            {sizes.map((size, index) => (
              <button
                key={index}
                className={
                  size === brushSize
                    ? "toolbox-btn bs-btn selected"
                    : "toolbox-btn bs-btn"
                }
                onClick={(e) => {
                  brushSize = size;
                  addSelectedClass(e.target);
                }}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="brush-color-container">
            <p>Palet</p>
            {colors.map((color, index) => (
              <button
                key={index}
                className={
                  color === brushColor
                    ? "toolbox-btn c-btn selected"
                    : "toolbox-btn c-btn"
                }
                style={{ backgroundColor: color }}
                onClick={(e) => {
                  brushColor = color;
                  addSelectedClass(e.target);
                }}
              ></button>
            ))}
          </div>
          <div className="brush-custom-color-container">
            <p>Özel Renk</p>
            <input
              type="color"
              onChange={(e) => (brushColor = e.target.value)}
            />
          </div>
          <div>
            <button className="clear-btn" onClick={() => clearCanvas()}>
              Temizle
            </button>
          </div>
          <div>
            <a
              className="download-btn"
              download="evde-ogren-cizim.png"
              href=""
              onClick={(e) => downloadImage(e)}
            >
              İndir
            </a>
          </div>
        </div>

        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default Drawing;
