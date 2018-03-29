/**
* Sorting all array elements except one
* 
* @param pos index of elem to skip
* @retrun array sort array
**/
Array.prototype.arrange = function(pos)
{
    var posVal = this.splice(pos,1).pop();
    this.sort(function(a,b){return a-b;});
    this.splice(pos,0,posVal);
    return this;
}