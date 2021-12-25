var OSM = OSM || {};
var k , j;

OSM.preventDuplicates = function(executionContext)
{
 
    
    
    
            let formContext=executionContext.getFormContext();
        let fieldValue=formContext.getAttribute('osm_questionsid').getValue();
        let fieldId = fieldValue[0].id.slice(1, fieldValue[0].id.length - 1);
        let surveyValue = formContext.getAttribute('osm_surveyid').getValue();
        let SurveyId = surveyValue[0].id.slice(1, surveyValue[0].id.length - 1);
        k = fieldValue;
        debugger;
        if(fieldValue != null){
            console.log(fieldId);
            console.log(k);
            var eventArgs = econtext.getEventArgs();  
            if (eventArgs.getSaveMode() == 70 || eventArgs.getSaveMode() == 1) {  
                eventArgs.preventDefault();  
            } 
            //Xrm.WebApi.retrieveRecord("osm_customersurvey", "d74c1c11-e846-ec11-8c62-002248412224").then(function success(result){console.log(result)}, function error(){});
            Xrm.WebApi.retrieveMultipleRecords("osm_surveyquestions", "?$select=_osm_questionsid_value&$filter= _osm_questionsid_value eq  " + fieldId.toLowerCase() + " and _osm_surveyid_value eq " + SurveyId.toLowerCase()).then(
                function success(result) {
                   
                     j = result;
                    console.log(result);
                     debugger;
                     if(result.entities.length > 0)
                     {
                        
                        Xrm.Utility.alertDialog("Duplicate records found", null);
                        return;
                     }
                     else{
                        
                        save = false;
                        formContext.data.entity.save();
                        
                     }
                    // for(let i = 0; i < result.entities.length; i++)
                    // {
                    //     if(fieldId.toLowerCase()== result.entities[i]._osm_questionsid_value)
                    //     {
                           
                    //         //Xrm.Page.getAttribute("osm_questionsid").setValue(null);
                    //         var eventArgs = executionContext.getEventArgs();
                    //         eventArgs.preventDefault();
                    //         Xrm.Utility.alertDialog("Duplicate records found", null);
                    //          break;
                    //     }
                    // }
                   
                    },
                function (error) {
                    //console.log(error.message);
                    // handle error conditions
                    console.log("record not found you can continue");
                    Xrm.Utility.alertDialog("You can continue", null);
                }
            );
        }
          
            
        
       // preventAutoSave(executionContext);
        
    
   
   
}