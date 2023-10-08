function chunk(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = [];
    for (let j = i; j < Math.min(i + chunkSize, arr.length); j++) {
      chunk.push(arr[j]);
    }
    chunks.push(chunk);
  }
  return chunks;
}
