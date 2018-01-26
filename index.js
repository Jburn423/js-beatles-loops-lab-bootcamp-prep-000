function theBeatlesPlay(musicians, instruments)
{
    var array = [];
    for(let i = 0; i < musicians.length; i++)
    {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return array;
}theBeatlesPlay(musicians, instruments);

function johnLennonFacts(facts)
{
  var yellingFacts = [];
  let i = 0;
  while(i<facts.length)
  {
    yellingFacts.push((`${facts[i]}!!!`));
    i++;
  }
  return yellingFacts;
}johnLennonFacts(facts);