export default function swDev(){
  const swUrl = `${process.env.PUBLIC_URL}/sw.js`
  navigator.serviceWorker.register(swUrl).then(res => {
    console.warn('response', res)
  })
}