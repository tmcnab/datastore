Commands
========

The datastore recognizes the following commands as valid. Invalid commands will cause errors and will be rejected.

| Command | Arguments           | Description                                          |
| ------- | ------------------- | ---------------------------------------------------- |
| COUNT   |                     | Counts the current length of the set                 |
| INSERT  | record              | Inserts a single record into the store               |
| FILTER  | path operator value | Selects all records where expression evaluates true  |
| SKIP    | count               | Omits `count` items from the start of the result set |
| TAKE    | count               | From a transaction set, limit the output from the    |

## X Definitions
This section defines the previously noted terms in plain language.

### X.Y `count` ###
A `count` is a nonzero number limiting the current result-set to `count` records output. Using the example:
```
> COUNT
= 7

> FILTER('type', 'eq', 'Person') COUNT
= 2
```

- In the first query, since there are expressions it returns the number of records in the store
- In the second query it returns the count of all records where the `type` path is `'Person'`.

## Example Datastore Data

```
{ type: 'Person',   role: 'Engineer', name: 'Earl Braun' },
{ type: 'Person',   role: 'Engineer', name: 'Lockne Hanes'},
{ type: 'Location', city: 'New York', resources: {
	'lithium': 220,
	'titanium': 11,
}},
{ type: 'Location', city: 'Houston', resources: {
	'lithium': 100,
	'titanium': 5,
}},
{ type: 'Product', name: 'Machine Parts', price: '$110.99' },
{ type: 'Product', name: 'Control Board', price: '$99.99' },
{ type: 'Payroll', recipients: {
	'Earl Braun': '$3735.12',
	'Lockne Hanes': '$4242.53',
}}
```
