function points(games)
{
  var sum=0; 
  for (var i=0; i<games.length; ++i) 
  {
    if (games[i][0]>games[i][2]) 
      sum+=3;
    if (games[i][0]==games[i][2]) 
      sum+=1; 
  }
  return sum; 
}