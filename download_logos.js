const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg', file: 'ashoka.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Seal_of_Uttar_Pradesh.svg', file: 'up-gov.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Digital_India_logo.svg', file: 'digital-india.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Swachh_Bharat_Abhiyan_logo.svg', file: 'swachh-bharat.svg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/MyGov_logo.png', file: 'mygov.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Smart_Cities_Mission.png', file: 'smart-city.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Amrut_logo.png', file: 'amrut.png' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg', file: 'gov-india.svg' }
];

const dir = path.join(__dirname, 'public', 'images', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

function download(url, filename) {
  const filepath = path.join(dir, filename);
  const file = fs.createWriteStream(filepath);
  
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  };

  https.get(url, options, function(response) {
    if (response.statusCode === 301 || response.statusCode === 302) {
      download(response.headers.location, filename);
      return;
    }
    response.pipe(file);
    file.on('finish', function() {
      file.close();
      console.log('Downloaded ' + filename);
    });
  }).on('error', function(err) {
    fs.unlink(filepath, () => {});
    console.error('Error downloading ' + filename + ': ' + err.message);
  });
}

logos.forEach(l => download(l.url, l.file));
