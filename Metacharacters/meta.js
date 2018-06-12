let re;
//Literal character
re = /hello/; // null , doesnt match
re = /hello/i; // matches

//Meta characters
re = /^h/i; // means whole string must start with 'h'
re = /d$/i; // means whole string must end with 'd'
re = /world$/i; // means whole string must end with 'world'
re = / world$/i; // means whole string must end with 'world' Same but with space 
re = /^hello$/i; // whole string must be hello (start and end with hello)
re = /h.llo/i; //Matches any but ONLY one character passed instead of dot
re = /h*llo/i; //Matches any character 0 or more times - so it may be even without character there 
re = /gre?a?y/i ; // Word grey is spelled both with 'e' and 'a' so ? says that that char is optional. Also without those 'a' or 'e' it will work
re = /gre?a?y\?/i; //Escape characters


//Brackets [] - Character sets
re = /gr[ae]y/i; //Must be an 'a' or 'e'. No char will not pass
re = /[GF]rey/; //Must be G or F
re = /[^GF]rey/i; //Will match anything except G or F . SO if '^' inside brackets - it means NOT
re = /[A-Z]rey/; //Will match any UPPERCASE letter
re = /[a-z]rey/; //Will match any LOWERCASE letter
re = /[A-Za-z]rey/; //Will match any letter and case
re = /[0-9]rey/; //Will match any digit

//Braces {} - Quantifiers
re = /Hel{2}o/i; // 'l' must occur exact amount of times{2}
re = /Hel{2,4}o/i; // 'l' must occur exact amount of times in range from 2 to 4 times
re = /Hel{2,}o/i; // 'l' must occur at least {2} times


//Parentheses () - GRouping
re = /([0-9]x){3}/i;  //will match '3x3x3x' or more times 3x
re = /^([0-9]x){3}$/i;  //will match exactly '3x3x3x'


//Shorthand chararcter classes
re = /\w/; //word character - alphanumeric - can be any number or letter or _
re = /\w+/; //Looks for one or morealphanumeric character
re = /\W/; // non alphanumeric characters
re = /\d/; //match any digit character
re = /\d+/; //match any digit character 0 or more times
re = /\D/; //match non-digit char
re = /\s/; //match whitespace chaaracter ( tab , space)
re = /\S/; //matches non-whitespace chars
re = /Hell\b/i; //Word boundery -кордон слова MEans it will match only exact 'Hell' word but not 'hello' for example

//Assertions
re = /x(?=y)/; //MAtch x only if it's followed by y
re = /x(?!y)/; //MAtch x only if NOT followed by y




//String to match
// let str = 'Hello world';
// let str = 'Grey?';
// let str = '3x3x3x';
let str = 'xy';

//log results
let result = re.exec(str);
console.log(result);


function test(re , str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} doesn't match ${re.source}`)
    }
}

test(re, str);