import { IconHome } from '@tabler/icons-react'
import CreateDatabasesPage from '../pages/CreateDatabasesPage'
import InfoNavSection from '../components/navbar/InfoNavSection'
import { IconCode } from '@tabler/icons-react'
import { IconTableColumn } from '@tabler/icons-react'
import EditorSqlPage from '../pages/EditorSqlPage'
import TablesDatabasePage from '../pages/TablesDatabasePage'
import { IconTable } from '@tabler/icons-react'
import { IconBrackets } from '@tabler/icons-react'

export const Theme_colors = {
  primary: [
    '#d9fdff', //0
    '#adf0ff', //1
    '#7de4ff', //2
    '#4dd9ff', //3
    '#26cefe', //4
    '#15b5e5', //5
    '#008cb3', //6
    '#007a9b', //7
    '#00627c', //8
    '#00556d' //9
  ],
  secondary: [
    '#f9f0e6', //0
    '#eed1b3', //1
    '#eed1b3', //2
    '#e9c199', //3
    '#e3b280', //4
    '#dda366', //5
    '#d8934d', //6
    '#d28433', //7
    '#cd741a', //8
    '#c76500' //9
  ],
  bg: [
    '#F5F5F5', // fondo-light
    '#EBEBEB', // bordes-fondo-light
    '#F0F0F0', // fondo-alt-light
    '#2d2d2d', //fonto-alt-black
    '#1E1E1E', // bordes-fondo-dark
    '#393939' // fondo-black
  ],
  dark: [
    '#fffff',
    '#A6A7AB',
    '#909296',
    '#5C5F66',
    '#373A40',
    '#393939', // bg de los form y algunos hovers
    '#25262B',
    '#1A1B1E',
    '#141517',
    '#101113'
  ]
}

export const Pages_Items = [
  { forNav: true, component: CreateDatabasesPage, path: '/app', name: 'Home', icon: IconHome },
  {
    forNav: true,
    component: TablesDatabasePage,
    path: '/tables',
    name: 'Tables',
    icon: IconTable
  },
  { forNav: true, component: InfoNavSection, path: '/data', name: 'Data', icon: IconTableColumn },
  { forNav: true, component: EditorSqlPage, path: '/editor', name: 'Editor', icon: IconCode },
  { forNav: true, component: InfoNavSection, path: '/backup', name: 'Backup', icon: IconCode }
]

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
  { name: 'bigint', description: 'signed eight-byte integer', icon: IconBrackets, color: 'grape' },
  {
    name: 'bigserial',
    description: 'autoincrementing eight-byte integer',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'bit', description: 'fixed-length bit string', icon: IconBrackets, color: 'grape' },
  {
    name: 'bit Varying',
    description: 'variable-length bit string',
    icon: IconBrackets,
    color: 'grape'
  },
  {
    name: 'boolean',
    description: 'logical Boolean (true/false)',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'box', description: 'rectangular box on a plane', icon: IconBrackets, color: 'grape' },
  { name: 'bytea', description: 'binary data (“byte array”)', icon: IconBrackets, color: 'grape' },
  {
    name: 'character',
    description: '	fixed-length character string',
    icon: IconBrackets,
    color: 'grape'
  },
  {
    name: 'character varying',
    description: 'variable-length character string',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'cidr', description: 'IPv4 or IPv6 network address', icon: IconBrackets, color: 'grape' },
  { name: 'circle', description: 'circle on a plane', icon: IconBrackets, color: 'grape' },
  {
    name: 'date',
    description: 'calendar date (year, month, day)',
    icon: IconBrackets,
    color: 'grape'
  },
  {
    name: 'double precision',
    label: 'doble',
    description: 'double precision floating-point number (8 bytes)',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'inet', description: 'IPv4 or IPv6 host address', icon: IconBrackets, color: 'grape' },
  { name: 'integer', description: 'signed four-byte integer', icon: IconBrackets, color: 'grape' },
  { name: 'interval', description: 'time span', icon: IconBrackets, color: 'grape' },
  { name: 'json', description: '	textual JSON data', icon: IconBrackets, color: 'grape' },
  {
    name: 'jsonb',
    description: 'binary JSON data, decomposed',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'line', description: 'infinite line on a plane', icon: IconBrackets, color: 'grape' },
  { name: 'lseg', description: 'line segment on a plane', icon: IconBrackets, color: 'grape' },
  {
    name: 'macaddr',
    description: 'MAC (Media Access Control) address',
    icon: IconBrackets,
    color: 'grape'
  },
  {
    name: 'macaddr8',
    description: 'MAC (Media Access Control) address (EUI-64 format)',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'money', description: 'currency amount', icon: IconBrackets, color: 'grape' },
  {
    name: 'numeric',
    description: 'exact numeric of selectable precision',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'path', description: 'geometric path on a plane', icon: IconBrackets, color: 'grape' },
  { name: 'point', description: 'geometric point on a plane', icon: IconBrackets, color: 'grape' },
  {
    name: 'polygon',
    description: 'closed geometric path on a plane',
    icon: IconBrackets,
    color: 'grape'
  },
  {
    name: 'real',
    description: 'single precision floating-point number (4 bytes)',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'smallint', description: 'signed two-byte integer', icon: IconBrackets, color: 'grape' },
  {
    name: 'smallserial',
    description: 'autoincrementing two-byte integer',
    icon: IconBrackets,
    color: 'grape'
  },
  {
    name: 'serial',
    description: 'autoincrementing four-byte integer',
    icon: IconBrackets,
    color: 'grape'
  },
  {
    name: 'text',
    description: 'variable-length character string',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'time', description: 'time of day (no time zone)', icon: IconBrackets, color: 'grape' },
  {
    name: 'timez',
    description: 'time of day, including time zone',
    icon: IconBrackets,
    color: 'grape',
    param: '(time, zone)'
  },
  {
    name: 'timestamp',
    description: 'date and time (no time zone)',
    icon: IconBrackets,
    color: 'grape'
  },
  {
    name: 'timestampz',
    description: 'date and time, including time zone',
    icon: IconBrackets,
    color: 'grape',
    param: '(time, zone)'
  },
  { name: 'tsquery', description: 'text search query', icon: IconBrackets, color: 'grape' },
  { name: 'tsvector', description: 'text search document', icon: IconBrackets, color: 'grape' },
  {
    name: 'uuid',
    description: 'universally unique identifier',
    icon: IconBrackets,
    color: 'grape'
  },
  { name: 'xml', description: 'XML data', icon: IconBrackets, color: 'grape' }
]
