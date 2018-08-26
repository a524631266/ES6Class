//字符串模板嵌套
//建立一个table tr td
let tmpl = (addrs)=>`
    <table>
    ${
        addrs.map(addr =>`
            <tr><td>${addr.first}</td></tr>
            <tr><td>${addr.sec}</td></tr>
        `).join('')
    }
    </table>
`
let data = [
    {first:"aa",sec:"aas"},
    {first:"bb",sec:"bbs"}
]
console.log(tmpl(data)); 
<table>
<tr><td>aa</td></tr>
<tr><td>aas</td></tr>
<tr><td>bb</td></tr>
<tr><td>bbs</td></tr>
</table>

//如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。
let str = 'return ' + '`Hello ${name}`'
// 1.
let func = new Function('name',str)
console.log(func("zhangll"));  