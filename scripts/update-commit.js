const pkg = require('../package.json');
const pkgVersionRegex = /^(\d+\.\d+\.\d+)(?:-alpha\.(.{7}))?/;

function printUpdateVersion(
  baseBranchName,
  triggerCommitHash,
  developCommitHash,
) {
  const [, prodVersion, baseCommitHash = developCommitHash] =
    pkgVersionRegex.exec(pkg.version);

  let version;
  switch (baseBranchName) {
    case 'main':
      // merge into main branch
      version = prodVersion; // e.g. 1.2.3
      break;

    case 'develop':
      // merge into develop branch
      version = `${prodVersion}-alpha.${triggerCommitHash.slice(0, 7)}`; // e.g. 1.2.3-alpha.1234567
      break;

    default:
      // merge into other branches
      const date = new Date().toISOString().replace(/(-|:|\.\d{3}Z)/g, '');
      const ticket = baseBranchName.replace(/\//, '.');

      version = `${prodVersion}-alpha.${baseCommitHash.slice(
        0,
        7,
      )}-${ticket}.${date}`; // e.g. 1.2.3-alpha.1234567-epic.NOP-29.20230413T075727
  }

  // print version
  console.log(version);
}

const main = () => {
  const command = process.argv[2];
  const args = process.argv.slice(3); // [ base branch name, commit hash triggered github workflow, last commit hash of develop branch ]

  switch (command) {
    case 'update-version':
      printUpdateVersion(...args);
      break;
    default:
  }
};

main();
