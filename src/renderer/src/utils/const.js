import {
  IconBrackets,
  IconHome,
  IconCode,
  IconReportAnalytics,
  IconServerBolt,
  IconDatabaseExport,
  IconTable
} from '@tabler/icons-react'

export const Sql_Template_Code = [
  {
    label: 'Create Table',
    code: `CREATE TABLE tablename (
    id_name int NOT NULL PRIMARY KEY,
    colum1 int DEFAULT 1,
    PRIMARY KEY (id_name),
    FOREIGN KEY (id_name) REFERENCES otherTable(id_name)
    );`
  },
  {
    label: 'Drop Table',
    code: `DROP TABLE table_name;`
  },
  {
    label: 'Alter Table - ADD',
    code: `ALTER TABLE table_name
    ADD column_name datatype;`
  },
  {
    label: 'Alter Table - REMOVE',
    code: `ALTER TABLE table_name
    DROP COLUMN column_name;`
  },
  {
    label: 'Alter Table - RENAME',
    code: `ALTER TABLE table_name
    RENAME COLUMN old_name to new_name;`
  },
  {
    label: 'Alter Table - ALTER TYPE',
    code: `ALTER TABLE table_name
    ALTER COLUMN column_name TYPE [type_data];`
  },
  {
    label: 'Select',
    code: `SELECT column1, column2, ...
    FROM table_name;`
  },
  {
    label: 'Select Distinct',
    code: `SELECT DISTINCT column1, column2, ...
    FROM table_name;`
  },
  {
    label: 'Where',
    code: `SELECT column1, column2, ...
  FROM table_name
  WHERE condition;`
  },
  {
    label: 'AND OR NOT',
    code: `SELECT column1, column2, ...
    FROM table_name
    WHERE condition1 [AND|OR|NOT] condition2 [AND|OR|NOT] condition3 ...;`
  },
  {
    label: 'Order By',
    code: `SELECT column1, column2, ...
    FROM table_name
    ORDER BY column1, column2, ... ASC|DESC;`
  },
  {
    label: 'Insert Into',
    code: `INSERT INTO table_name (column1, column2, column3, ...)
    VALUES (value1, value2, value3, ...);`
  },
  {
    label: 'Update',
    code: `UPDATE table_name
    SET column1 = value1, column2 = value2, ...
    WHERE condition;`
  },
  {
    label: 'Delete',
    code: `DELETE FROM table_name WHERE condition;`
  },
  {
    label: 'Min Max',
    code: `SELECT [MIN|MAX](column_name)
    FROM table_name
    WHERE condition;`
  },
  {
    label: 'COUNT() AVG() SUM()',
    code: `SELECT [COUNT|AVG|SUM](column_name)
    FROM table_name
    WHERE condition;`
  },
  {
    label: 'Like',
    code: `SELECT column1, column2, ...
    FROM table_name
    WHERE columnN LIKE pattern;`
  },
  {
    label: 'In',
    code: `SELECT column_name(s)
    FROM table_name
    WHERE column_name IN (value1, value2, ...);`
  },
  {
    label: 'Between',
    code: `SELECT column_name(s)
    FROM table_name
    WHERE column_name BETWEEN value1 AND value2;`
  },
  {
    label: 'Aliases',
    code: `SELECT column_name AS alias_name
    FROM table_name;`
  },
  {
    label: 'Inner Join',
    code: `SELECT column_name(s)
    FROM table1
    INNER JOIN table2
    ON table1.column_name = table2.column_name;`
  },
  {
    label: 'Left Join',
    code: `SELECT column_name(s)
    FROM table1
    LEFT JOIN table2
    ON table1.column_name = table2.column_name;`
  },
  {
    label: 'Right Join',
    code: `SELECT column_name(s)
    FROM table1
    RIGHT JOIN table2
    ON table1.column_name = table2.column_name;`
  },
  {
    label: 'Full Join',
    code: `SELECT column_name(s)
    FROM table1
    FULL OUTER JOIN table2
    ON table1.column_name = table2.column_name
    WHERE condition;`
  },
  {
    label: 'Self Join',
    code: `SELECT column_name(s)
    FROM table1 T1, table1 T2
    WHERE condition;`
  },
  {
    label: 'Union',
    code: `SELECT column_name(s) FROM table1
    UNION
    SELECT column_name(s) FROM table2;`
  },
  {
    label: 'Group By',
    code: `SELECT column_name(s)
    FROM table_name
    WHERE condition
    GROUP BY column_name(s)
    ORDER BY column_name(s);`
  },
  {
    label: 'Having',
    code: `SELECT column_name(s)
    FROM table_name
    WHERE condition
    GROUP BY column_name(s)
    HAVING condition
    ORDER BY column_name(s);`
  },
  {
    label: 'Exists',
    code: `SELECT column_name(s)
    FROM table_name
    WHERE EXISTS
    (SELECT column_name FROM table_name WHERE condition);`
  }
]

export const Types_Postgres_Table = [
  { name: 'bigint', description: 'signed eight-byte integer', icon: IconBrackets, color: 'red' },
  {
    name: 'bigserial',
    description: 'autoincrementing eight-byte integer',
    icon: IconBrackets,
    color: 'blue'
  },
  { name: 'bit', description: 'fixed-length bit string', icon: IconBrackets, color: 'green' },
  {
    name: 'bit Varying',
    description: 'variable-length bit string',
    icon: IconBrackets,
    color: 'amber'
  },
  {
    name: 'boolean',
    description: 'logical Boolean (true/false)',
    icon: IconBrackets,
    color: 'purple'
  },
  { name: 'box', description: 'rectangular box on a plane', icon: IconBrackets, color: 'cyan' },
  {
    name: 'bytea',
    description: 'binary data (“byte array”)',
    icon: IconBrackets,
    color: 'red'
  },
  {
    name: 'character',
    description: '	fixed-length character string',
    icon: IconBrackets,
    color: 'blue'
  },
  {
    name: 'character varying',
    description: 'variable-length character string',
    icon: IconBrackets,
    color: 'green'
  },
  { name: 'cidr', description: 'IPv4 or IPv6 network address', icon: IconBrackets, color: 'amber' },
  { name: 'circle', description: 'circle on a plane', icon: IconBrackets, color: 'purple' },
  {
    name: 'date',
    description: 'calendar date (year, month, day)',
    icon: IconBrackets,
    color: 'cyan'
  },
  {
    name: 'double precision',
    label: 'doble',
    description: 'double precision floating-point number (8 bytes)',
    icon: IconBrackets,
    color: 'red'
  },
  { name: 'inet', description: 'IPv4 or IPv6 host address', icon: IconBrackets, color: 'blue' },
  { name: 'integer', description: 'signed four-byte integer', icon: IconBrackets, color: 'green' },
  { name: 'interval', description: 'time span', icon: IconBrackets, color: 'amber' },
  { name: 'json', description: '	textual JSON data', icon: IconBrackets, color: 'purple' },
  {
    name: 'jsonb',
    description: 'binary JSON data, decomposed',
    icon: IconBrackets,
    color: 'cyan'
  },
  { name: 'line', description: 'infinite line on a plane', icon: IconBrackets, color: 'red' },
  { name: 'lseg', description: 'line segment on a plane', icon: IconBrackets, color: 'blue' },
  {
    name: 'macaddr',
    description: 'MAC (Media Access Control) address',
    icon: IconBrackets,
    color: 'green'
  },
  {
    name: 'macaddr8',
    description: 'MAC (Media Access Control) address (EUI-64 format)',
    icon: IconBrackets,
    color: 'amber'
  },
  { name: 'money', description: 'currency amount', icon: IconBrackets, color: 'purple' },
  {
    name: 'numeric',
    description: 'exact numeric of selectable precision',
    icon: IconBrackets,
    color: 'cyan'
  },
  { name: 'path', description: 'geometric path on a plane', icon: IconBrackets, color: 'red' },
  { name: 'point', description: 'geometric point on a plane', icon: IconBrackets, color: 'blue' },
  {
    name: 'polygon',
    description: 'closed geometric path on a plane',
    icon: IconBrackets,
    color: 'green'
  },
  {
    name: 'real',
    description: 'single precision floating-point number (4 bytes)',
    icon: IconBrackets,
    color: 'amber'
  },
  { name: 'smallint', description: 'signed two-byte integer', icon: IconBrackets, color: 'purple' },
  {
    name: 'smallserial',
    description: 'autoincrementing two-byte integer',
    icon: IconBrackets,
    color: 'cyan'
  },
  {
    name: 'serial',
    description: 'autoincrementing four-byte integer',
    icon: IconBrackets,
    color: 'red'
  },
  {
    name: 'text',
    description: 'variable-length character string',
    icon: IconBrackets,
    color: 'blue'
  },
  { name: 'time', description: 'time of day (no time zone)', icon: IconBrackets, color: 'green' },
  {
    name: 'timez',
    description: 'time of day, including time zone',
    icon: IconBrackets,
    color: 'amber',
    param: '(time, zone)'
  },
  {
    name: 'timestamp',
    description: 'date and time (no time zone)',
    icon: IconBrackets,
    color: 'purple'
  },
  {
    name: 'timestampz',
    description: 'date and time, including time zone',
    icon: IconBrackets,
    color: 'cyan',
    param: '(time, zone)'
  },
  { name: 'tsquery', description: 'text search query', icon: IconBrackets, color: 'red' },
  { name: 'tsvector', description: 'text search document', icon: IconBrackets, color: 'blue' },
  {
    name: 'uuid',
    description: 'universally unique identifier',
    icon: IconBrackets,
    color: 'green'
  },
  { name: 'xml', description: 'XML data', icon: IconBrackets, color: 'amber' }
]

export const NavLinks_Routes = [
  { path: '/app/home', name: 'home', icon: IconHome },
  { path: '/app/tables', name: 'tables', icon: IconTable, isSub: true },
  { path: '/app/editor', name: 'editor', icon: IconCode },
  { path: '/app/backup', name: 'backup', icon: IconDatabaseExport },
  { path: '/app/data', name: 'data', icon: IconReportAnalytics },
  { path: '/app/api', name: 'api', icon: IconServerBolt }
]
