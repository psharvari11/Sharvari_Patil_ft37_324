# what was wrong in the code
-- The filter function was getting executed before the fetching so it was filtering an empty data and returned empty
The throttle function didn’t support passing parametersand also "this" which could cause issues if the function ever needs arguments or uses this. 

#  How you fixed it
-- for filter bug I added an if condition where it checks that data is empty and if empty it returns 

if(data.length===0) return

-- for throttle I added func.apply(this, args);