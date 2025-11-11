import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, '../public/profile.png');
const outputPath = join(__dirname, '../public/profile-optimized.png');
const webpPath = join(__dirname, '../public/profile.webp');

async function optimizeImage() {
  try {
    // Optimize PNG
    await sharp(inputPath)
      .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(outputPath);
    
    // Create WebP version
    await sharp(inputPath)
      .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);
    
    console.log('✓ Images optimized successfully');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImage();
