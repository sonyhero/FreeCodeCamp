/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

/*
convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
Waiting:convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
Waiting:convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
Waiting:convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
Waiting:convertHTML("Schindler's List") should return the string Schindler&apos;s List.
Waiting:convertHTML("<>") should return the string &lt;&gt;.
Waiting:convertHTML("abc") should return the string abc.
*/

/*
& = &amp;
< = &lt;
> = &gt;
" = &quot;
' = &apos;
*/

function convertHTML(str) {
    return str.split('').map(x=>{
        switch (x) {
            case '&' : return x = '&amp;';
            case '<' : return x = '&lt;';
            case '>' : return x = '&gt;';
            case '\"' : return x = '&quot;';
            case '\'' : return x = '&apos;';
                default: return x
                
        }
    }).join('')
}


console.log(convertHTML("Dolce & Gabbana"))