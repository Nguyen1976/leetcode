CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
declare offset_value INT;
set offset_value = N - 1;
  RETURN (
      # Write your MySQL query statement below.
    select ifnull((
        select distinct salary from Employee order by salary desc limit 1 offset offset_value
    ), null)
  );
END