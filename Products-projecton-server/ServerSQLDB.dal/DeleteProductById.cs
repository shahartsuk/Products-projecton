using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServerSQLDB.dal
{
    public class DeleteProductById
    {
        public void DeleteProduct(int productID)
        {
            string deleteQuery = "delete from ProductsProjecton where ProductID = @product_id ";
            SQLQuery.DeleteFromDB(deleteQuery, productID);
        }
    }
}
