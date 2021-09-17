function createMedalTable(medals) {
    // Parse the medal data to produce a medaltable
    // The winner gets 3 points, second place 2 points and third place 1 point

    const medalTable = {};
    const positionPoints = {1: 3, 2: 2, 3: 1};

    for (let event of medals) {
        const teamPodiumResult = event.podium;
        for(let positionData of teamPodiumResult) {
            const split = positionData.split(".");
            const position = split[0];
            const team = split[1];
            if(!(team in medalTable)) {
                medalTable[team] = 0;
            }
            medalTable[team] = medalTable[team] + positionPoints[position];
        }   
    }
    return medalTable;
}

describe("Medal Table Generator", () => {
    // Test function, please do not edit
    it("creates correct data structure ", () => {
        // Input data
        const medals = [{
                sport: "cycling",
                podium: ["1.China", "2.Germany", "3.ROC"]
            },
            {
                sport: "fencing",
                podium: ["1.ROC", "2.France", "3.Italy"]
            },
            {
                sport: "high jump",
                podium: ["1.Italy", "1.Qatar", "3.Belarus"]
            },
            {
                sport: "swimming",
                podium: ["1.USA", "2.France", "3.Brazil"]
            }
        ];

        // Expected output data
        const medalTable = {
            "Italy": 4,
            "France": 4,
            "ROC": 4,
            "USA": 3,
            "Qatar": 3,
            "China": 3,
            "Germany": 2,
            "Brazil": 1,
            "Belarus": 1,
        };

        const actualResult = createMedalTable(medals);
        expect(actualResult).toMatchObject(medalTable);
    });
});