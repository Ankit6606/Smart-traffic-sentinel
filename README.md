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
