function takeANumber( katzDeliLine, name ) {
  // adds name to end of katzDeliLine array
  katzDeliLine.push(name);
  // gets the length of katzDeliLine after a name has been added
  var num = katzDeliLine.length;
  // returns a welcome message that includes the current persons name and their number
  return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing( katzDeliLine ) {
  if( katzDeliLine.length === 0 ) {
    
    return `There is nobody waiting to be served!`
  }
}
