const { execSync } = require('child_process');

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

// Stage all changes
run('git add .');

// Commit with a descriptive message
run('git commit -m "chore: update sitemap, add industry schemas, and verify assets"');

// Push to origin/main
run('git push origin main');
