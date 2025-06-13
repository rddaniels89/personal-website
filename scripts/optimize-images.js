const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY = 80; // Adjust quality (0-100)
const MAX_WIDTH = 1200; // Maximum width for large images
const THUMB_WIDTH = 300; // Width for thumbnails

async function optimizeImage(inputPath, outputPath, width) {
  try {
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath.replace(/\.(jpg|jpeg)$/, '.webp'));
    
    console.log(`✓ Optimized: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(directory) {
  try {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (/\.(jpg|jpeg)$/i.test(entry.name)) {
        const optimizedPath = fullPath.replace(/\.(jpg|jpeg)$/i, '.webp');
        const thumbPath = fullPath.replace(/\.(jpg|jpeg)$/i, '.thumb.webp');
        
        // Create optimized version
        await optimizeImage(fullPath, optimizedPath, MAX_WIDTH);
        
        // Create thumbnail version
        await optimizeImage(fullPath, thumbPath, THUMB_WIDTH);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// Start processing from the Projects directory
const projectsDir = path.join(process.cwd(), 'public', 'images', 'Projects');
processDirectory(projectsDir)
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error); 