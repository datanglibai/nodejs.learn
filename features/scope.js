var testV;

class scopeService
{
    constructor(v)
    {
        this.testV = v;
    }
    setValue()
{
    
    setTimeout(()=>{console.log(this.testV)},1000);
}
}

exports.scopeService = scopeService;

