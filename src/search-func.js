export function search(data, text) {
    if (!data) {
        return "Loading data, please try again after a while.."
    }

    const result = findByCountry(data, text);
    return result || `Unable to find a result by '${text}'`;
}

function findByCountry(data, text) {
    const result = data.locations.find(location => location.country === text);
    if (result) {
        return `${result.country}(${result.last_updated.substr(0,10)}): , confirmed: ${result.latest.confirmed}, deaths: ${result.latest.deaths}.`;
    }
}
