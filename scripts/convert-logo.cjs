const input = 'public/assets/cyano-logo.png';
const output = 'public/assets/cyano-logo-transparent.png';
const threshold = 245; // 0-255, pixels with all channels >= threshold will be made transparent

(async () => {
  try {
    const JimpModule = await import('jimp');
    const Jimp = JimpModule.Jimp || JimpModule.default?.Jimp || JimpModule;
    const image = await Jimp.read(input);

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      // If pixel is near-white, make fully transparent
      if (r >= threshold && g >= threshold && b >= threshold) {
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await new Promise((resolve, reject) => image.write(output, (err) => err ? reject(err) : resolve()));
    console.log('Converted and saved:', output);
  } catch (err) {
    console.error('Error converting image:', err);
    process.exit(1);
  }
})();
