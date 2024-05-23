const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src', 'public', 'images', 'heros', 'hero-image-large.jpg');
const destination = path.resolve(__dirname, 'dist', 'images', 'heros');

// Membuat direktori tujuan jika belum ada
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

// Memeriksa apakah file target ada
if (!fs.existsSync(target)) {
  console.error('File target not found:', target);
  process.exit(1); // Keluar dari proses dengan kode error
}

// Mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
sharp(target)
  .resize(800)
  .toFile(path.resolve(destination, 'hero-image-large.jpg'), (err) => {
    if (err) {
      console.error('Error resizing image:', err);
    } else {
      console.log('Image resized and saved successfully');
    }
  });

// Mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
sharp(target)
  .resize(480)
  .toFile(path.resolve(destination, 'hero-image-small.jpg'), (err) => {
    if (err) {
      console.error('Error resizing image:', err);
    } else {
      console.log('Image resized and saved successfully');
    }
  });
