import React, { useCallback, useEffect } from 'react';

class Text {
  text: string;
  canvas: HTMLCanvasElement;
  ctx: any;
  constructor(title: string, canvas: HTMLCanvasElement) {
    this.text = title;
    this.canvas = canvas;
  }

  setFont() {
      this.ctx = this.canvas.getContext("2d");
      this.ctx.font = "30px Arial";
  }
}

class FillText extends Text {
  constructor(title: string, canvas: HTMLCanvasElement) {
    super(title, canvas);
    console.info('fill Constructor')
  }
  draw() {
    super.setFont();
    this.ctx.fillText(this.text, 10, 50);
  }
}

class StrokeText extends Text {
  heightPosition: number;
  constructor(title: string, heightPosition: number, canvas: HTMLCanvasElement) {
    super(title, canvas);
    this.heightPosition = heightPosition;
    console.info('stroke Constructor')
  }
  draw() {
    super.setFont();
    this.ctx.strokeText(this.text, 10, 50);
  }
}

export type TextCanvasProps = {
  type: 'fill' | 'stroke'
}

export const TextCanvas:React.FC<TextCanvasProps> = props => {
  const id = `${props.type}myCanvas`
  useEffect(() => {
    const canvas: HTMLCanvasElement = document.getElementById(id) as HTMLCanvasElement;
    const text = props.type === 'fill' ? new FillText('Fill Text',canvas) : new StrokeText('Stroke Text', 80, canvas);
    text.draw();
  })


  return <canvas id={id} width="200" height="100"></canvas>
}