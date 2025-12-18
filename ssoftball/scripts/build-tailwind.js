const fs = require('fs');
const postcss = require('postcss');
const tailwind = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

async function build() {
  try {
    const input = fs.readFileSync('src/tailwind-input.css', 'utf8');
    const result = await postcss([tailwind('./tailwind.config.cjs'), autoprefixer]).process(input, {
      from: 'src/tailwind-input.css',
      to: 'src/tailwind-manual.css',
    });
    fs.writeFileSync('src/tailwind-manual.css', result.css);
    console.log('tailwind-manual.css written');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

build();
