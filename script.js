// --------------------------Answer 1---------------------------------

function getUrlParameterValue(url, parameter) {
   
    const urlParts = url.split('?');
    
  
    if (urlParts.length < 2 || !parameter) {
        return null;
    }
    
    
    const queryString = urlParts[1];
    
    
    const params = queryString.split('&');
    
    
    for (const param of params) {
        
        const [key, value] = param.split('=');
        
        
        if (key === parameter) {
            return decodeURIComponent(value.replace(/\+/g, ' '));
        }
    }
    // console.log(key);
    
    return null;
}


var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";


console.log(getUrlParameterValue(url, "utm_medium")); 
console.log(getUrlParameterValue(url, "utm_campaign")); 



// --------------------------------Answer 2---------------------------------------

function reverseTheNumber(num) {
    let numStr = num.toString();
     return parseInt(numStr.split("").reverse().join(""));
    
}
console.log(reverseTheNumber(149));