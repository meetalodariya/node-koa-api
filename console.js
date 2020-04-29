for (let i = 1; i <= 1e9; ++i) {
  const { rss, heapTotal, external } = process.memoryUsage();
  console.log(i, rss, heapTotal, external);
}
