/*
  This library is for serving the GET requests
  from the users. 
  @author: Navjot Singh Dhaliwal
*/
var Router = function(request,response){
  response.render("index.ejs");
}//end router
module.exports.Router = Router;