def reverse_file(filename):
    """ overwrite given file"""
    s = ArrayStack()
    #take a look at the array-stack file to see the implementation
    original = open(filename)
    for line in original:
        s.push(line.rstrip('\n'))
    original.close()
    output = open(filename,'w')#reopen file
    while not s.is_empty():
        output.write(s.pop() + '\n') #re-insert newline
    output.close()
