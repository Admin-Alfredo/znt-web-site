export const setAnimateClass = function (element, delay) {
  return new Promise((resolve, reject) => {
    setInterval(() => resolve(element.classList, element), delay)
  })
}