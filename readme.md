# brainfuck.*

Most implementations function like this:  
```shell
# for a compiled language
<compile the source>
./<executable> <file>.bf

# for a interpreted language
<interpeter> <script> <file>.bf

# for example:
node brainfuck.js helloWorld.bf
```

Not everything will work on all implementations. Standard cell size is 8 bits.

# Implementations notices

### VBScript (.vbs)

175 lines of Visual Basic Scripting, very over-engineered.  
Run with `csrcipt brainfuck.vbs <file>.bf`  
Configuration is possible in the first few lines of the file.  
Supports debug logging.

### LOLCODE (.lol)

143 lines of LOLCODE, or pure madness.  

**NOTE: This requires the future branch of lci to run. LOLCODE does NOT SUPPORT converting character 
codes therefore inputs and outputs are numbers only, inputting other values than number will break 
everything.**  
Ensure you have `lci v0.11.2` before running.

### JavaScript (.js)

59 lines of JS, quite simple algorithm.  
Use with Node.js, `node brainfuck.js <file>.bf`  
Cell size can be configured in the first line.

