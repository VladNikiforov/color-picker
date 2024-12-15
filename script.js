const hueSlider = document.getElementById('hue')
const saturationSlider = document.getElementById('saturation')
const lightnessSlider = document.getElementById('lightness')

const hueValue = document.getElementById('hue-value')
const saturationValue = document.getElementById('saturation-value')
const lightnessValue = document.getElementById('lightness-value')

function updateScene() {
  const hue = hueSlider.value
  const saturation = saturationSlider.value
  const lightness = lightnessSlider.value

  hueValue.textContent = `${hue}°`
  saturationValue.textContent = `${saturation}%`
  lightnessValue.textContent = `${lightness}%`

  document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`

  document.getElementById('text').textContent = `HSL(${hue}, ${saturation}%, ${lightness}%)`
  lightness >= 50 ? (document.body.style.color = '#000') : (document.body.style.color = '#fff')
}

hueSlider.addEventListener('input', updateScene)
saturationSlider.addEventListener('input', updateScene)
lightnessSlider.addEventListener('input', updateScene)

updateScene()
