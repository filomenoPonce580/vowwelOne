function vowelOne(s){
return s.replace(/[^aeiou]/gi, '0')
//^ means apply to everythin except:
//i = grab upper and lowercase

.replace(/[^\d]/g, '1');
// \d = select digits
// therefore ^\d = select everything but the digits
}
