using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServerSQLDB.dal;
using ServerSQLDB.model;

namespace ServerSQLDB.entities
{
    public class UserMessages
    {
        public void addMessage(UserMessage message)
        {
            string Query = string.Format("insert into ContactUs (FirstName,LastName,UserMessage,Email)values('{0}','{1}','{2}','{3}')", message.FirstName, message.LastName, message.User_Message, message.Email);
            SQLQuery.RunNonQuery(Query);
        }

       
    }
}
