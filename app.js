document.addEventListener('DOMContentLoaded', function() {
    const engineSelect = document.getElementById('engineSelect');
    const turboSelect = document.getElementById('turboSelect');
    const fuelSelect = document.getElementById('fuelSelect');
    const partsTable = document.getElementById('partsTable');
    const totalCostElement = document.getElementById('totalCost');

    let selectedParts = {
        engine: null,
        turbo: null,
        fuel: null
    };

    function updatePartsTable() {
        const tbody = partsTable.querySelector('tbody');
        tbody.innerHTML = '';
        let totalCost = 0;

        // Add engine parts
        if (selectedParts.engine) {
            const engineData = buildData.engines[selectedParts.engine];
            Object.entries(engineData.parts).forEach(([category, parts]) => {
                parts.forEach(part => {
                    const row = createPartRow(part);
                    tbody.appendChild(row);
                    totalCost += part.cost * part.quantity;
                });
            });
        }

        // Add turbo parts
        if (selectedParts.turbo) {
            const turboData = buildData.turbo[selectedParts.turbo];
            Object.entries(turboData.parts).forEach(([category, parts]) => {
                parts.forEach(part => {
                    const row = createPartRow(part);
                    tbody.appendChild(row);
                    totalCost += part.cost * part.quantity;
                });
            });
        }

        // Add fuel system parts
        if (selectedParts.fuel) {
            const fuelData = buildData.fuel[selectedParts.fuel];
            Object.entries(fuelData.parts).forEach(([category, parts]) => {
                parts.forEach(part => {
                    const row = createPartRow(part);
                    tbody.appendChild(row);
                    totalCost += part.cost * part.quantity;
                });
            });
        }

        // Update total cost
        totalCostElement.textContent = `Total: $${totalCost.toFixed(2)}`;
    }

    function createPartRow(part) {
        const row = document.createElement('tr');
        row.className = 'part-row';
        row.innerHTML = `
            <td>${part.category}</td>
            <td>${part.name}</td>
            <td>${part.partNumber}</td>
            <td>${part.quantity}</td>
            <td>$${part.cost.toFixed(2)}</td>
        `;

        // Add click handler for expanded details
        row.addEventListener('click', () => {
            const detailsRow = document.createElement('tr');
            detailsRow.innerHTML = `
                <td colspan="5">
                    <div class="expanded-details">
                        <strong>Notes:</strong> ${part.notes}
                    </div>
                </td>
            `;
            
            // Remove existing details if any
            const nextRow = row.nextElementSibling;
            if (nextRow && nextRow.querySelector('.expanded-details')) {
                nextRow.remove();
            } else {
                row.parentNode.insertBefore(detailsRow, row.nextSibling);
            }
        });

        return row;
    }

    // Event listeners
    engineSelect.addEventListener('change', (e) => {
        selectedParts.engine = e.target.value;
        updatePartsTable();
    });

    turboSelect.addEventListener('change', (e) => {
        selectedParts.turbo = e.target.value;
        updatePartsTable();
    });

    fuelSelect.addEventListener('change', (e) => {
        selectedParts.fuel = e.target.value;
        updatePartsTable();
    });
});
