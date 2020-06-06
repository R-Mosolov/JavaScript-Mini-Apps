SELECT
	first_name,
	LENGTH(first_name) len
FROM
	customer
ORDER BY
	LENGTH(first_name) DESC;
