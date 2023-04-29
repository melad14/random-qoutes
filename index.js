// var quote = document.getElementById('quote');


var randomQuotes = [
{quote:`Be yourself; everyone else is already taken.`,
auther:`by: Oscar Wilde`
},
{quote:`I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
auther:`by: Marilyn Monroe`
},
{quote:`Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
auther:`by: Albert Einstein`
},
{quote:`Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
auther:`by: Bernard M. Baruch`
},
{quote:`You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
auther:`by: Dr. Seuss`
},
{quote:`You only live once, but if you do it right, once is enough.`,
auther:`by: Mae West`
},


];

function changeQuotes() {

  var r =Math.floor((Math.random() * randomQuotes.length));
  document.getElementById("quote").innerHTML=randomQuotes[r].quote;
  document.getElementById("auther").innerHTML=randomQuotes[r].auther;

 
}

