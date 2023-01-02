using ServerSQLDB.dal;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServerSQLDB.model;
using System.Data.SqlTypes;

namespace ServerSQLDB.entities
{
    internal class Products
    {
        public void LoadProducts()
        {
            SQLQuery.RunCommandResult("select * from ProductsProjecton", insertToHashTableFromDB);
        }
        public object insertToHashTableFromDB(SqlDataReader reader)
        {
            MainManager.Instance.ProductsList.Clear();
            while (reader.Read())
            {
                Product product = new Product();
                product.ID = reader.GetInt32(0);
                product.Name = reader.GetString(1);
                product.QuantityPerUnit = reader.GetString(2);
                product.UnitPrice = reader.GetDecimal(3);
                product.UnitsInStock = reader.GetInt16(4);
                product.UnitsOnOrder = reader.GetInt16(5);
                product.ReorderLevel = reader.GetInt16(6);
                MainManager.Instance.ProductsList.Add(product.ID, product);
            }
            return MainManager.Instance.ProductsList;
        }
    }
}
