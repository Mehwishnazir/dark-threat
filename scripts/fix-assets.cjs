const fs = require('fs');
const path = require('path');

const BLOGS_DIR = path.join(__dirname, '..', 'src', 'blogs');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Available fallback images in public/
const VALID_IMAGES = [
  '/dark-threat-1.webp',
  '/dark-threat-2.webp',
  '/dark-threat-3.webp',
  '/dark-threat-4.webp',
  '/dark-threat-5.webp',
  '/dark-threat-6.webp'
];

function getDeterministicImage(filename) {
  let hash = 0;
  for (let i = 0; i < filename.length; i++) {
    hash = filename.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % VALID_IMAGES.length;
  return VALID_IMAGES[index];
}

function fixAssets() {
  console.log('Fixing invalid featuredImage references across all blogs...');
  const files = fs.readdirSync(BLOGS_DIR);
  let fixedCount = 0;

  for (const file of files) {
    if (file === 'index.ts' || !file.endsWith('.ts')) {
      continue;
    }

    const filePath = path.join(BLOGS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the featuredImage line
    const match = content.match(/featuredImage:\s*["']([^"']+)["']/);
    if (!match) {
      continue;
    }

    const imagePath = match[1];
    
    // Check if image exists
    let exists = false;
    if (imagePath.startsWith('/')) {
      exists = fs.existsSync(path.join(PUBLIC_DIR, imagePath.substring(1)));
    } else {
      exists = fs.existsSync(path.join(PUBLIC_DIR, imagePath));
    }

    if (!exists) {
      const fallbackImage = getDeterministicImage(file);
      console.log(`Fixing ${file}: replacing "${imagePath}" with "${fallbackImage}"`);
      
      // Replace in content
      const regex = new RegExp(`featuredImage:\\s*["']${imagePath.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}["']`);
      content = content.replace(regex, `featuredImage: "${fallbackImage}"`);
      
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
    }
  }

  console.log(`SUCCESS: Fixed ${fixedCount} blog files.`);
}

fixAssets();
