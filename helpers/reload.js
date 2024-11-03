export function reload(arr, place, component) {
    place.innerHTML = ""

    for (let item of arr) {
        let elem = component(item)

        place.append(elem)
    }
}