const fs = require('fs');
const pathModule = require('path');

let mainDirs = [];

/**
 * isMainDir
 * @param {String} name
 */
function isMainDir(name) {
  return mainDirs.some(dir => dir === name);
}

/**
 * setMainDirs
 * @param {String} path
 */
function setMainDirs(path) {
  const result = fs.readdirSync(path, { withFileTypes: true });

  mainDirs = result
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

/**
 * makeRelativeStr
 * @param {Number} depth
 */
function makeRelativeStr(currentPath) {
  const arr = currentPath.split('\\').slice(1); // slice 1 à cause du premier dist/

  return function(_, importPath) {
    const arrCurrent = [...arr];
    const arrImport = importPath.split('/');

    if (!isMainDir(arrImport[0])) {
      return `from '${importPath}'`;
    }

    while (arrImport.length > 1 && arrCurrent.length) {
      if (arrImport[0] !== arrCurrent[0]) {
        break;
      }

      arrImport.shift() === arrCurrent.shift();
    }

    const depth = arrCurrent.length - 1,
      filler = new Array(depth).fill('..').join('/');

    return `from '${filler}/${arrImport.join('/')}'`;
  };
}

/**
 * isRootDirectoryValid
 * @param {String} path
 */
function isRootDirectoryValid(path) {
  if (typeof path !== 'string') {
    throw new Error('Directory path must be a string.');
  }

  const stat = fs.statSync(path);

  if (!stat.isDirectory()) {
    throw new Error('You must give a valid directory as argument.');
  }

  return true;
}

/**
 * processDir
 * @param {String} path
 */
function processDir(path, ...args) {
  console.log(`\\${path}`);

  const result = fs.readdirSync(path, { withFileTypes: true });

  const directories = result.filter(dirent => dirent.isDirectory()),
    files = result.filter(dirent => dirent.isFile());

  files.forEach(file => processFile(pathModule.join(path, file.name), ...args));
  directories.forEach(dirent =>
    processDir(pathModule.join(path, dirent.name), ...args)
  );
}

/**
 * processFile
 * @param {String} path
 * @param {String} pattern
 * @param {string} replace
 */
function processFile(path, pattern, replace) {
  console.log('\t-', path);

  const fdR = fs.openSync(path, 'r');
  const data = fs.readFileSync(fdR, 'utf8');
  fs.closeSync(fdR);

  const result = data
    .replace(pattern, replace)
    .replace(/from '([\w\/@\-]+)'/g, makeRelativeStr(path));

  const fdW = fs.openSync(path, 'w');
  fs.writeFileSync(fdW, result, 'utf8');
  fs.closeSync(fdW);
}

/**
 * run
 * @param {String} path
 */
function run(path, ...args) {
  try {
    setMainDirs(path);
    isRootDirectoryValid(path);
    processDir(path, ...args);
  } catch (e) {
    console.log(e);
  }
}

const rootDirectory = process.argv[2],
  pattern = new RegExp(process.argv[3].toString(), 'g'),
  replace = process.argv[4];

run(rootDirectory, pattern, replace);
