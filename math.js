
function calulate(type, weight)
{
    
}

function calculetePrice(req ,res){

// getting type from my form.html
var type   = req.query.type
var weight = parseFloat(req.query.weight)

var result = calulate(type, weight)


}