const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64];
const inputFile = path.join(__dirname, '../public/favicon.svg');
const outputFile = path.join(__dirname, '../public/favicon.ico');

async function convertToIco() {
  try {
    const image = await loadImage(inputFile);
    
    // Create canvases for each size
    const buffers = await Promise.all(
      sizes.map(size => {
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, size, size);
        return canvas.toBuffer('image/png');
      })
    );

    // Create ICO file
    const ico = Buffer.concat([
      // ICO header
      Buffer.from([0, 0, 1, 0, sizes.length, 0]),
      ...buffers.map((buffer, i) => {
        const size = sizes[i];
        return Buffer.concat([
          // ICO directory entry
          Buffer.from([
            size, // width
            size, // height
            0, // color palette
            0, // reserved
            1, 0, // color planes
            32, 0, // bits per pixel
            buffer.length & 0xff,
            (buffer.length >> 8) & 0xff,
            (buffer.length >> 16) & 0xff,
            (buffer.length >> 24) & 0xff,
            22 + (i * 16), // offset
            0, 0, 0
          ]),
          buffer
        ]);
      })
    ]);

    fs.writeFileSync(outputFile, ico);
    console.log('Successfully created favicon.ico');
  } catch (error) {
    console.error('Error converting favicon:', error);
  }
}

convertToIco(); 