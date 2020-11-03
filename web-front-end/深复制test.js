function cloneObj(source,target){
    if(target===undefined) target={};
    var names=Object.getOwnPropertyNames(source);
    for(var i=0;i<names.length;i++){
        var desc=Object.getOwnPropertyDescriptor(source,names[i]);
        if(typeof desc.value==="object" && desc.value!==null){
            var obj;
            switch(true){
                case desc.value.constructor===Date://当标签为日期时
                    obj=new Date(desc.value.toString());
                    break;
                case desc.value.constructor===RegExp://当value为正则表达式时
                    obj=new RegExp(desc.value.source,desc.value.flags);
                    break;
                case HTMLElement.isPrototypeOf(desc.value.constructor)://当value为html标签时
                    obj=document.createElement(desc.value.nodeName);
                    break;
                    default:
                        obj=new desc.value.constructor();
            }
            Object.defineProperty(target,names[i],{
                enumerable:desc.enumerable,
                writable:desc.writable,
                configurable:desc.configurable,
                value:obj
            });
            cloneObj(desc.value,obj)
        }else{
            Object.defineProperty(target,names[i],desc);
        }
    }
    return target;
}
var o={a:1};
o=cloneObj(obj);
obj.d.h.j[1]=100;
console.log(o);