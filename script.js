function mincost(arr)
{ 
	    let totalCost = 0;
        arr.sort((a, b) => a - b);
        while (arr.length > 1) {
           let sum = arr[0] + arr[1];
           totalCost += sum;
           arr = [sum, ...arr.slice(2)];
           arr.sort((a, b) => a - b);
     }
      return totalCost;
}

module.exports=mincost;
