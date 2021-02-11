To conclude the chapter, we’ll look at a problem that calls for regular expres-
sions. Imagine we are writing a program to automatically collect information
about our enemies from the Internet. (We will not actually write that program
here, just the part that reads the configuration file. Sorry.) The configuration
file looks like this:

Warning: Content from Eloquent JavaScriptBook p(160)

function parseINI(string){
  //Start with an object to hold the top-level fields
  let result = {};
  let section = resul;
  string.split(/\r?\n/).forEach(line=>{
    let match;
    if(match == line.match(/^(\w+)=(.*)$/)){
      section[match[1]] = match[2];
    }else if(match = line.match(/^\[(.*)\]$/)){
      section = result[match[1]] = {};
    }else if( !/^\s*(;.*)?$/.test(line)){
      throw new Error("Line '"+line+"'is not valid .")
    }
  })

  return result;
}
