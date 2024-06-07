
  
function createTable() {
  // Prompt the user for the number of rows
  const numRows = parseInt(prompt("Input number of rows"), 10);
  // Prompt the user for the number of columns
  const numCols = parseInt(prompt("Input number of columns"), 10);
  
  // Get the table element by its ID
  const table = document.getElementById('myTable');
  
  // Clear any existing content in the table
  table.innerHTML = '';

  // Create the rows and columns
  for (let i = 0; i < numRows; i++) {
    // Create a new row
    const row = document.createElement('tr');
    
    for (let j = 0; j < numCols; j++) {
      // Create a new cell
      const cell = document.createElement('td');
      // Set the cell's text content
      cell.textContent = `Row-${i} Column-${j}`;
      // Append the cell to the row
      row.appendChild(cell);
    }
    
    // Append the row to the table
    table.appendChild(row);
  }
}

// Add event listener to the button to trigger the createTable function
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('createTableButton').addEventListener('click', createTable);
});

