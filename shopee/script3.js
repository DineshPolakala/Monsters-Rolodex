var OSM = OSM || {};
var k , j;
OSM.preventDuplicates = function(executionContext)
{
  
    let formContext=executionContext.getFormContext();
    let fieldValue=formContext.getAttribute('osm_questionsid').getValue();
    let surveyValue = formContext.getAttribute('osm_surveyid').getValue();
    let SurveyId = SurveyId[0].id.slice(1, SurveyId[0].id.length - 1);
    let fieldId = fieldValue[0].id.slice(1, fieldValue[0].id.length - 1);
    k = fieldValue;
    if(fieldValue != null && surveyValue != null){
       console.log(fieldId);
        console.log(k);
        Xrm.WebApi.retrieveMultipleRecords("osm_surveyquestions", "?$select=_osm_questionsid_value&$filter= _osm_questionsid_value eq  " + fieldId.toLowerCase() + " and _osm_surveyid_value eq " + SurveyId.toLowerCase()).then(
            function success(result) {
                
                 j = result;
                console.log(result);
                 debugger;
                 if(result.entities.length > 0){
                    Xrm.Utility.alertDialog("Duplicate records found", null);
                    Xrm.Page.getAttribute("osm_questionsid").setValue(null);
                     break;
                 }
                // for(let i = 0; i < result.entities.length; i++)
                // {
                //     if(id.toLowerCase()== result.entities[i]._osm_questionsid_value)
                //     {
                //         Xrm.Utility.alertDialog("Duplicate records found", null);
                //         Xrm.Page.getAttribute("osm_questionsid").setValue(null);
                //          break;
                //     }
                // }
                
            },
            function (error) {
                //console.log(error.message);
                // handle error conditions
                
            }
        );
    }
    
    
}