# Smart-traffic-sentinel

keeping extra code here
Certainly! Here are the SQLite `CREATE TABLE` statements for the three database schemas:

**1) Vehicles**

```sql
CREATE TABLE IF NOT EXISTS vehicles (
  vehicle_id INTEGER PRIMARY KEY AUTOINCREMENT,
  number_plate TEXT,
  make TEXT,
  model TEXT,
  pollution_status TEXT,
  insurance_status TEXT,
  tax_status TEXT,
  owner_email TEXT
);
```

10 sample rows of data for the "vehicles" table:

```plaintext
| vehicle_id | number_plate |     make     |     model    | pollution_status | insurance_status |  tax_status   |       owner_email       |
|------------|--------------|--------------|--------------|------------------|------------------|---------------|-------------------------|
|     1      |  MH12AB1234  |   Maruti     |   Alto       |   2023-01-15     |   2024-03-10     |  2024-04-20   |  owner1@example.com     |
|     2      |  DL05CD5678  |   Toyota     |   Camry      |   2023-04-22     |   2023-12-05     |  2024-06-15   |  owner2@example.com     |
|     3      |  KA08EF9012  |   Honda      |   Civic      |   2023-07-18     |   2024-02-28     |  2024-03-17   |  owner3@example.com     |
|     4      |  TN20GH3456  |   Ford       |   Mustang    |   2023-02-09     |   2023-11-14     |  2024-08-22   |  owner4@example.com     |
|     5      |  WB09IJ6789  |   Volkswagen |   Golf       |   2023-05-27     |   2024-05-01     |  2024-09-30   |  owner5@example.com     |
|     6      |  MH06KL1234  |   Hyundai    |   Sonata     |   2023-08-14     |   2023-09-29     |  2024-10-10   |  owner6@example.com     |
|     7      |  GJ18MN5678  |   BMW        |   X5         |   2023-03-30     |   2024-01-20     |  2024-11-05   |  owner7@example.com     |
|     8      |  AP07OP9012  |   Mercedes   |   C-Class    |   2023-06-09     |   2023-10-15     |  2024-12-19   |  owner8@example.com     |
|     9      |  TS04QR3456  |   Audi       |   A4         |   2023-09-25     |   2024-04-02     |  2024-02-28   |  owner9@example.com     |
|     10     |  RJ02ST6789  |   Nissan     |   Altima     |   2023-12-11     |   2023-08-07     |  2024-01-14   |  owner10@example.com    |
```

Here's an SQL `INSERT INTO` statement that you can use to insert the sample data into an SQLite database for the "vehicles" table:

```sql
INSERT INTO vehicles (number_plate, make, model, pollution_status, insurance_status, tax_status, owner_email) VALUES
('MH12AB1234', 'Maruti', 'Alto', '2023-01-15', '2024-03-10', '2024-04-20', 'owner1@example.com'),
('DL05CD5678', 'Toyota', 'Camry', '2023-04-22', '2023-12-05', '2024-06-15', 'owner2@example.com'),
('KA08EF9012', 'Honda', 'Civic', '2023-07-18', '2024-02-28', '2024-03-17', 'owner3@example.com'),
('TN20GH3456', 'Ford', 'Mustang', '2023-02-09', '2023-11-14', '2024-08-22', 'owner4@example.com'),
('WB09IJ6789', 'Volkswagen', 'Golf', '2023-05-27', '2024-05-01', '2024-09-30', 'owner5@example.com'),
('MH06KL1234', 'Hyundai', 'Sonata', '2023-08-14', '2023-09-29', '2024-10-10', 'owner6@example.com'),
('GJ18MN5678', 'BMW', 'X5', '2023-03-30', '2024-01-20', '2024-11-05', 'owner7@example.com'),
('AP07OP9012', 'Mercedes', 'C-Class', '2023-06-09', '2023-10-15', '2024-12-19', 'owner8@example.com'),
('TS04QR3456', 'Audi', 'A4', '2023-09-25', '2024-04-02', '2024-02-28', 'owner9@example.com'),
('RJ02ST6789', 'Nissan', 'Altima', '2023-12-11', '2023-08-07', '2024-01-14', 'owner10@example.com');
```

You can execute this SQL statement in your SQLite database to insert the sample data into the "vehicles" table. Make sure to adjust the table and column names if necessary to match your database schema.


**2) Violations**

```sql
CREATE TABLE IF NOT EXISTS violations (
  violation_id INTEGER PRIMARY KEY AUTOINCREMENT,
  vehicle_id INTEGER,
  violation_type TEXT,
  violation_date TEXT,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles (vehicle_id)
);
```

**3) Fine Receipts**

```sql
CREATE TABLE IF NOT EXISTS fine_receipts (
  receipt_id INTEGER PRIMARY KEY AUTOINCREMENT,
  vehicle_id INTEGER,
  violation_id INTEGER,
  fine_amount INTEGER,
  issue_date TEXT,
  status TEXT,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles (vehicle_id),
  FOREIGN KEY (violation_id) REFERENCES violations (violation_id)
);
```

These `CREATE TABLE` statements define the structure of the three tables: Vehicles, Violations, and Fine Receipts, including their columns and relationships. You can use these statements to create the database tables for your "Traffic Application" project using SQLite.
