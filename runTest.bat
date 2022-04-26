@echo off
set c=1
:begin

set /a c=%c%+1
@echo on
echo "Testing!";

npm test
if %c% EQU 4 goto end
goto begin
:end