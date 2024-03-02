import React from 'react';
import DataTable from './DataTable';

const data = [
  { sno: 1, customer_name: 'John Doe', age: 30, phone: '123-456-7890', location: 'New York', created_at: '2024-03-01T12:00:00Z' },
  { sno: 2, customer_name: 'Jane Smith', age: 25, phone: '987-654-3210', location: 'San Francisco', created_at: '2024-03-02T10:30:00Z' },
  { sno: 3, customer_name: 'Alice JohnSon', age: 35, phone: '123-456-789', location: 'Chicago', created_at: '2024-02-28T10:30:00Z' },
  { sno: 4, customer_name: 'Alice', age: 25, phone: '123-456-7890', location: 'New York', created_at: '2024-03-01T10:00:00Z' },
  { sno: 5, customer_name: 'Bob', age: 30, phone: '234-567-8901', location: 'Los Angeles', created_at: '2024-03-01T11:00:00Z' },
  { sno: 6, customer_name: 'Charlie', age: 35, phone: '345-678-9012', location: 'Chicago', created_at: '2024-03-01T12:00:00Z' },
  { sno: 7, customer_name: 'David', age: 40, phone: '456-789-1230', location: 'Houston', created_at: '2024-03-01T13:00:00Z' },
  { sno: 8, customer_name: 'Eve', age: 45, phone: '567-890-1234', location: 'Phoenix', created_at: '2024-03-01T14:00:00Z' },
  { sno: 9, customer_name: 'Frank', age: 50, phone: '678-901-2345', location: 'Philadelphia', created_at: '2024-03-01T15:00:00Z' },
  { sno: 10, customer_name: 'Grace', age: 55, phone: '789-012-3456', location: 'Antonio', created_at: '2024-03-01T16:00:00Z' },
  { sno: 11, customer_name: 'helen', age: 60, phone: '890-123-4567', location: 'Diego', created_at: '2024-03-01T17:00:00Z' },
  { sno: 12, customer_name: 'Ivy', age: 65, phone: '901-234-5678', location: 'Dallas', created_at: '2024-03-01T18:00:00Z' },
  { sno: 13, customer_name: 'Jack', age: 70, phone: '012-345-6789', location: 'San Jose', created_at: '2024-03-01T19:00:00Z' },
  { sno: 14, customer_name: 'Kate', age: 75, phone: '098-765-4321', location: 'Austin', created_at: '2024-03-01T20:00:00Z' },
  { sno: 15, customer_name: 'Liam', age: 80, phone: '987-654-3210', location: 'Jacksonville', created_at: '2024-03-01T21:00:00Z' },
  { sno: 16, customer_name: 'Mia', age: 85, phone: '876-543-2109', location: 'Indianpolis', created_at: '2024-03-01T22:00:00Z' },
  { sno: 17, customer_name: 'Noah', age: 90, phone: '765-432-1098', location: 'San Francisco', created_at: '2024-03-01T23:00:00Z' },
  { sno: 18, customer_name: 'Olivia', age: 95, phone: '654-321-0987', location: 'Columbus', created_at: '2024-03-01T00:00:00Z' },
  { sno: 19, customer_name: 'Peter', age: 100, phone: '543-210-9876', location: 'Fort Worth', created_at: '2024-03-02T01:00:00Z' },
  { sno: 20, customer_name: 'Queenie', age:5, phone: '432-109-8765', location: 'Charlotte', created_at: '2024-03-02T02:00:00Z' },
  { sno: 21, customer_name: 'Ryan', age: 10, phone: '321-098-7654', location: 'Detroit', created_at: '2024-03-02T03:00:00Z' },
  { sno: 22, customer_name: 'Sara', age: 15, phone: '210-987-6543', location: 'Elpaso', created_at: '2024-03-02T04:00:00Z' },
  { sno: 23, customer_name: 'Tom', age: 20, phone: '109-876-5432', location: 'Seattle', created_at: '2024-03-02T05:00:00Z' },
  { sno: 24, customer_name: 'Uma', age: 25, phone: '098-765-4321', location: 'Memphis', created_at: '2024-03-02T06:00:00Z' },
  { sno: 25, customer_name: 'Victor', age: 30, phone: '987-654-3210', location: 'Boston', created_at: '2024-03-02T07:00:00Z' },
  { sno: 26, customer_name: 'Wendy', age: 35, phone: '876-543-2109', location: 'Denver', created_at: '2024-03-02T08:00:00Z' },
  { sno: 27, customer_name: 'Xavier', age: 40, phone: '765-432-1098', location: 'Nashville', created_at: '2024-03-02T09:00:00Z' },
  { sno: 28, customer_name: 'Yara', age: 45, phone: '654-321-0987', location: 'Portland', created_at: '2024-03-02T10:00:00Z' },
  { sno: 29, customer_name: 'Zack', age: 50, phone: '543-210-9876', location: 'Oklahoma city', created_at: '2024-03-02T11:00:00Z' },
  { sno: 30, customer_name: 'Amy', age: 55, phone: '432-109-8765', location: 'Las Vegas', created_at: '2024-03-02T12:00:00Z' },
  { sno: 31, customer_name: 'Ben', age: 60, phone: '321-098-7654', location: 'Miami', created_at: '2024-03-02T13:00:00Z' },
  { sno: 32, customer_name: 'Cathy', age: 65, phone: '210-987-6543', location: 'Minneapolis', created_at: '2024-03-02T16:00:00Z' },
  { sno: 33, customer_name: 'Dan', age: 70, phone: '109-876-5432', location: 'Orlando', created_at: '2024-03-02T17:00:00Z' },
  { sno: 34, customer_name: 'Emma', age: 75, phone: '098-765-4321', location: 'Atlanta', created_at: '2024-03-02T18:00:00Z' },
  { sno: 35, customer_name: 'Finn', age: 80, phone: '987-654-3210', location: 'Washington', created_at: '2024-03-02T19:00:00Z' },
  { sno: 36, customer_name: 'Gina', age: 85, phone: '876-543-2109', location: 'Philadelphia', created_at: '2024-03-02T20:00:00Z' },
  { sno: 37, customer_name: 'harry', age: 90, phone: '765-432-1098', location: 'Boston', created_at: '2024-03-02T21:00:00Z' },
  { sno: 38, customer_name: 'Iris', age: 95, phone: '654-321-0987', location: 'Chicago', created_at: '2024-03-02T22:00:00Z' },
  { sno: 39, customer_name: 'Jake', age: 10, phone: '543-210-9876', location: 'Dallas', created_at: '2024-03-02T23:00:00Z' },
  { sno: 40, customer_name: 'Kelly', age: 15, phone: '432-109-9765', location: 'Seattle', created_at: '2024-03-03T00:00:00Z' },
  { sno: 41, customer_name: 'Lily', age: 20, phone: '321-098-7654', location: 'San Francisco', created_at: '2024-03-03T01:00:00Z' },
  { sno: 42, customer_name: 'Mike', age: 25, phone: '210-987-6543', location: 'Los Angeles', created_at: '2024-03-03T02:00:00Z' },
  { sno: 43, customer_name: 'Nora', age: 30, phone: '109-876-5432', location: 'Houston', created_at: '2024-03-03T03:00:00Z' },
  { sno: 44, customer_name: 'Sam Wilson', age: 35, phone: '321-098-7654', location: 'San Francisco', created_at: '2024-03-03T04:00:00Z' },
  { sno: 45, customer_name: 'Lily', age: 40, phone: '333-222-1111', location: 'Dallas', created_at: '2024-03-03T05:00:00Z' },
  { sno: 46, customer_name: 'Emily Davis', age: 45, phone: '999-888-7777', location: 'Atlanta', created_at: '2024-03-03T06:00:00Z' },
  { sno: 47, customer_name: 'Tom Brown', age: 50, phone: '666-777-8888', location: 'San Francisco', created_at: '2024-03-03T07:00:00Z' },
  { sno: 48, customer_name: 'Grace Lee', age: 55, phone: '222-333-4444', location: 'Boston', created_at: '2024-03-03T08:00:00Z' },
  { sno: 49, customer_name: 'Charlie Green', age: 60, phone: '777-888-9999', location: 'Seattle', created_at: '2024-03-03T09:00:00Z' },
  { sno: 50, customer_name: 'Eve White', age: 65, phone: '444-444-4444', location: 'Miami', created_at: '2024-03-03T10:00:00Z' },
];

const App = () => {
  return (
    <div>
      <h1>Data Table</h1>
      <DataTable data={data} />
    </div>
  );
};

export default App;