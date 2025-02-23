let sentenceBuilder={
    subject: "I",
    verb: "am",
    object  : "Coding",
    buildSentence : function (){
        if(sentenceBuilder.verb=="" || sentenceBuilder.verb==undefined){
            console.log("Incomplete sentence")
        }
        else{
            let v1=sentenceBuilder.subject 
            let v2=sentenceBuilder.verb 
            let v3=sentenceBuilder.object 
            console.log(v1+" "+v2+" "+v3)
        }
    },
    updateProperty : function (property,value){
        if(property!="subject" && property!="verb" && property!="object"){
            console.log("Invalid property")
        }
        else {
            (property=="subject") ? sentenceBuilder.subject=value : sentenceBuilder.subject ;
            (property=="verb") ? sentenceBuilder.verb=value : sentenceBuilder.verb ;
           (property=="object") ? sentenceBuilder.object=value : sentenceBuilder.object ;
        }
    }
}
sentenceBuilder.buildSentence()
sentenceBuilder.updateProperty("verb", "am learning"); //updating
sentenceBuilder.buildSentence()
sentenceBuilder.updateProperty("subject", "The cat");// updating
sentenceBuilder.updateProperty("verb", "is learning");// updating
sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("mood", "happy");
sentenceBuilder.updateProperty("verb", "");
sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("verb", "is going");// updating
sentenceBuilder.updateProperty("object", "to sleep");// updating
sentenceBuilder.buildSentence()
sentenceBuilder.updateProperty("subject", "");
sentenceBuilder.updateProperty("subject", "I");// updating
sentenceBuilder.updateProperty("verb", "was completed");// updating
sentenceBuilder.updateProperty("object", "problem");// updating
sentenceBuilder.buildSentence()
sentenceBuilder.updateProperty("state", "feeling angry")

