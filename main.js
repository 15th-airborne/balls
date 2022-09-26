function g(colors, balls) {
const total_colors = colors
const cache = {}
function f(rest_colors, rest_balls) {
const key = `${rest_colors},${rest_balls}`
if (key in cache)
return cache[key]
if (rest_colors == 0)
return 1
if (rest_balls == 0)
return 0
const result = (rest_colors / total_colors) * f(rest_colors - 1, rest_balls - 1) +
(1 - (rest_colors / total_colors)) * f(rest_colors, rest_balls - 1)
cache[key] = result
return result
}
return f(colors, balls)
}

function main() {
    document.getElementById("output").textContent = g(
        parseInt(document.getElementById("colors").value),
        parseInt(document.getElementById("balls").value),
    )
}