
module.exports.severities = function * (req , res , next) {

  return  yield  [ {severityID:'' , severityName:'Select a Severity'},
			       {severityID:'LOW' , severityName:'LOW9'},
			       {severityID:'MEDIUM' , severityName:'MEDUIM'},
                   {severityID:'CRITICAL' , severityName:'CRITICAL'}
		];
}

module.exports.statuses = function * (req , res , next) {

    return yield  [ {statusID:'' , statusText:'Select a Status'},
			        {statusID:'OPEN' , statusText:'OPEN'},
			        {statusID:'PENDING' , statusText:'PENDING'},
			        {statusID:'NOT A BUG' , statusText:'NOT A BUG'},
			        {statusID:'CLOSED' , statusText:'CLOSED'}
		         ];

}