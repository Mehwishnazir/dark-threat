const fs = require('fs');
const path = require('path');

const BLOGS_DIR = path.join(__dirname, '..', 'src', 'blogs');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

function verifyAssets() {
  console.log('Verifying featuredImage references across all blogs...');
  const files = fs.readdirSync(BLOGS_DIR);
  let errorCount = 0;

  for (const file of files) {
    if (file === 'index.ts' || !file.endsWith('.ts')) {
      continue;
    }

    const filePath = path.join(BLOGS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract featuredImage value
    const match = content.match(/featuredImage:\s*["']([^"']+)["']/);
    if (!match) {
      console.warn(`[WARNING] No featuredImage found in ${file}`);
      continue;
    }

    const imagePath = match[1];
    
    // Check if the file starts with '/' and exists in PUBLIC_DIR
    let absoluteImagePath;
    if (imagePath.startsWith('/')) {
      absoluteImagePath = path.join(PUBLIC_DIR, imagePath.substring(1));
    } else {
      absoluteImagePath = path.join(PUBLIC_DIR, imagePath);
    }

    if (!fs.existsSync(absoluteImagePath)) {
      console.error(`[ERROR] Blog file "${file}" refers to non-existent image "${imagePath}"`);
      errorCount++;
    }
  }

  if (errorCount === 0) {
    console.log('SUCCESS: All featuredImage references are valid and exist in the public directory!');
  } else {
    console.error(`FAILURE: Found ${errorCount} invalid featuredImage reference(s)!`);
    process.exit(1);
  }
}

verifyAssets();
