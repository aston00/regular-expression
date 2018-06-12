let re;
//reg expression literal
re = /hello/;

//reg expression case insensitive
re = /hello/i ;

//Global search Search entire string for all instances of hello and bot only first
re = /hello/g;

console.log(re); // /hello/
console.log(re.source)  //  hello

//exec() - returns result in array if there is match or null if no match

let result = re.exec('hello world');
console.log(result); // it shows [regExp , index(where regExp was found) , String (where we look for that expression)]
                    // ["hello" , index:0 , input: "hello world" ];

console.log(result.index); // 0


//test() - returns true or false if there is match
let result = re.test('hello');
console.log(result); //true

//match() - return result  array or null
let string = 'Hello there';
let result  = string.match(re);
console.log(result);

//search() - returns index of the first match if not found return -1;
let str = "Brad hello there";
let result = str.search(re);
console.loog(result); //5

//replace() - returns a new string with some or all of matches of a pattern
let str = "hello there";
let newStr  = str.replace(re , 'hi');
console.log(newStr); // "hi there";




