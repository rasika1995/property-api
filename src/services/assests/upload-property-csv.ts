import pool from "src/core/dbs";

// Function to process and insert CSV data into the database
export const uploadPropertyCSVService = async (csvData: string): Promise<string> => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // Split the CSV data into rows
    const rows = csvData.split("\n");

    // Extract column names from the first row (assuming they are comma-separated)
    const propertyColumns = rows[0]
      .split(",")
      .map((columnName) => columnName.trim());

    // Construct the INSERT query
    const placeholders = propertyColumns.map((_, j) => `$${j + 1}`).join(", ");
    const columnNames = propertyColumns
      .map((columnName) => `"${columnName}"`)
      .join(", ");
    const insertQuery = `
      INSERT INTO property (${columnNames}) VALUES (${placeholders});
    `;

    // Process and insert data rows into the database
    for (let i = 1; i < rows.length - 1; i++) {
      const columns = rows[i].split(","); // Split the row into columns assuming a comma delimiter
      const values = columns.map((col) => col.trim()); // Trim whitespace from values

      await client.query(insertQuery, values);
    }

    await client.query("COMMIT");
    return "CSV data inserted into the database.";
  } catch (error) {
    await client.query("ROLLBACK");
    throw new Error("Error occurred while processing the CSV file.");
  } finally {
    client.release();
  }
};
