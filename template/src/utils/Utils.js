export function extractFromAddress(result, type, shortName = false) {
    let components = result.address_components
    for (var i = 0; i < components.length; i++) {
        for (var j = 0; j < components[i].types.length; j++) {
            if (components[i].types[j] === type) {
                return shortName ? components[i].short_name : components[i].long_name
            }
        }
    }
    return ''
}
