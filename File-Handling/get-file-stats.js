const fs = require('fs');

const stats = fs.statSync('sample.txt');
console.log(stats);

/*
Stats {
  dev: 0,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 9288674231586200,
  size: 73,
  blocks: 0,
  atimeMs: 1737366746682.525,
  mtimeMs: 1737366739550.833,
  ctimeMs: 1737366739550.833,
  birthtimeMs: 1737361314414.815
}
  */