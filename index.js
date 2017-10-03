function takeANumber( katzDeliLine, name ) {
  // adds name to end of katzDeliLine array
  katzDeliLine.push( name );
  // gets the length of katzDeliLine after a name has been added
  var num = katzDeliLine.length;
  // returns a welcome message that includes the current persons name and their number
  return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing( katzDeliLine ) {
  if ( katzDeliLine.length === 0 ) {
    // returns the line is empty when no one is on line
    return `There is nobody waiting to be served!`;
  } else {
    // returns an announcement about the person it is serving (the first name in the array)
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine( line ) {
  if ( line.length === 0 ) {
    return `The line is currently empty.`;
  }
}
