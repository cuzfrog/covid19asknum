import {search} from "../src/search-func";

describe('func search', function () {
    it('findByCountry', function () {
        const data = {
            locations: [
                {
                    country: "A",
                    last_updated: "2022-05-30T12:35:05.415936Z",
                    latest: {
                        "confirmed": 180174,
                        "deaths": 7701,
                    }
                },
            ]
        };
        expect(search(data, "A")).toContain("180174");
        expect(search(data, "ADSDF")).toContain("Unable to find");
        expect(search(null, "A")).toContain("Loading");
    });
});