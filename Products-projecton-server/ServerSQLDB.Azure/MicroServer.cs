using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using ServerSQLDB.entities;
using System.Reflection.Metadata;
using ServerSQLDB.model;

namespace ServerSQLDB.Azure
{
    public static class MicroServer
    {
        [FunctionName("Products")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post","delete", Route = "Users/{action}/{IdNumber?}")] HttpRequest req,string action,string IdNumber)
        {
            switch(action)
            {
                case "GET":
                 MainManager.Instance.Init();
                 return new OkObjectResult(System.Text.Json.JsonSerializer.Serialize(MainManager.Instance.ProductsList));
                    case "POST":
                    UserMessage message;
                    message = System.Text.Json.JsonSerializer.Deserialize<UserMessage>(req.Body);
                    MainManager.Instance.userMessages.addMessage(message);
                    break;
                case "DELETE":
                    MainManager.Instance.del.DeleteProduct(int.Parse(IdNumber));
                    break;
                default:
                    break;
            }

            return null;
            //responseMessage
        }
    }
}


