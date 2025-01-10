const buildData = {
    engines: {
        ls6: {
            name: "6.0L LSx Build",
            parts: {
                block: [
                    {
                        category: "Block Assembly",
                        name: "6.0L LQ4/LQ9 Core",
                        partNumber: "12345",
                        quantity: 1,
                        cost: 2000,
                        notes: "Iron block, 4.000\" bore"
                    },
                    {
                        category: "Block Assembly",
                        name: "Main Studs Kit",
                        partNumber: "ARP-234-5678",
                        quantity: 1,
                        cost: 299.99,
                        notes: "ARP main stud kit"
                    },
                    // Add more block parts...
                ],
                rotating: [
                    {
                        category: "Rotating Assembly",
                        name: "Forged Crankshaft",
                        partNumber: "CRANK-123",
                        quantity: 1,
                        cost: 899.99,
                        notes: "4340 forged steel"
                    },
                    // Add more rotating assembly parts...
                ]
            }
        },
        dart427: {
            name: "Dart 427 Build",
            parts: {
                // Similar structure to ls6...
            }
        }
    },
    turbo: {
        rear: {
            name: "Rear Mount Single Turbo",
            parts: {
                turboKit: [
                    {
                        category: "Turbo Components",
                        name: "Precision 7675 Gen 2",
                        partNumber: "PTE-7675",
                        quantity: 1,
                        cost: 2199.99,
                        notes: "T4 divided 1.32 A/R"
                    },
                    {
                        category: "Turbo Components",
                        name: "TiAL 44mm Wastegate",
                        partNumber: "TIAL-44",
                        quantity: 1,
                        cost: 399.99,
                        notes: "With springs"
                    }
                ],
                hardware: [
                    {
                        category: "Hardware",
                        name: "304 SS 3\" Tubing",
                        partNumber: "SS-3IN",
                        quantity: 20,
                        cost: 299.99,
                        notes: "Price per foot"
                    }
                ]
            }
        }
    },
    fuel: {
        base: {
            name: "Base Fuel System (~800hp)",
            parts: {
                // Add fuel system parts...
            }
        }
    }
};

// Helper function to calculate total cost
function calculateTotalCost(selectedParts) {
    return Object.values(selectedParts).reduce((total, part) => {
        return total + (part.cost * part.quantity);
    }, 0);
}
