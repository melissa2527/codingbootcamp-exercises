SELECT *
FROM `countries`;

SELECT *
FROM `countries`
WHERE `population` > 20000000;

SELECT *
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population`;
-- desc is for descending order, default is ascending

SELECT *
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population`
LIMIT 10;