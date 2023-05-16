export function mancha(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }