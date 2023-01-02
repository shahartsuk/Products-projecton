using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServerSQLDB.dal
{
    public class SQLQuery
    {
        public static string connectionString = "Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=Northwind;Data Source=SHAHAR\\SQLEXPRESS01;";
        public delegate void SetDataReader_delegate(SqlDataReader reader);
        public delegate object SetResulrDataReader_delegate(SqlDataReader reader);
        public static void RunCommand(string sqlQuery, SetDataReader_delegate func)
        {
            
            using (SqlConnection connection = new SqlConnection(connectionString))
            {

                string queryString = sqlQuery;

                // Adapter
                using (SqlCommand command = new SqlCommand(queryString, connection))
                {
                    connection.Open();
                    //Reader
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        func(reader);
                    }
                }

            }

        }

        public static object RunCommandResult(string sqlQuery, SetResulrDataReader_delegate func)
        {
            object ret = null;
            
            using (SqlConnection connection = new SqlConnection(connectionString))
            {

                string queryString = sqlQuery;

                // Adapter
                using (SqlCommand command = new SqlCommand(queryString, connection))
                {
                    connection.Open();
                    //Reader
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        ret = func(reader);
                    }
                }

            }

            return ret;
        }
        public static void RunNonQuery(string sqlQuery)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                // Adapter
                using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    connection.Open();
                    //Reader
                    command.ExecuteNonQuery();
                }
            }
        }
        public static void DeleteFromDB(string SqlQuery, int ProductID)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string queryString = SqlQuery;

                connection.Open();

                // Adapter
                using (SqlCommand command = new SqlCommand(queryString, connection))
                {
                    command.Parameters.AddWithValue("@product_id", ProductID);
                    command.ExecuteNonQuery();
                }
            }
        }
    }
}
