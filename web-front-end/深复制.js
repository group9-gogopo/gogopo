function cloneObject(source,target){
    target=target||{};
    var names=Object.getOwnPropertyNames(source);
    for(let i=0;i<names.length;i++){
        let desc=Object.getOwnPropertyDescriptor(source,names[i]);
        if(typeof desc.value==='object' && desc.value!==null){
            var obj;
            switch(true){
                case desc.value.constructor===Date:
                    obj=new Date(desc.value.toString());
                    break;
                case desc.value.constructor===RegExp:
                    obj=new RegExp(desc.value.source,desc.value.flags);
                    break;
                case HTMLElement.isPrototypeOf(desc.value.constructor):
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
            Object.defineProperty(target,names[i],desc)
        }
    }
    return target;
}