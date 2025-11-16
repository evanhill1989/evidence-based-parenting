export function readingTime(text: string) {
  const wordsPerMinute = 200
  const wordCount = text.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)

  return {
    text: `${minutes} min read`,
    minutes,
    words: wordCount,
  }
}
