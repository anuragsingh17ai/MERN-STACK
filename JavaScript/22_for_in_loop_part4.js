const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swify by apple',
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

programming = ['js','rb','c++']
for(const key in programming)
{
    console.log(key)   //will print index
}
