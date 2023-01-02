using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServerSQLDB.model
{
    public class Product
    {
        private int _ID;
        public int ID { get { return _ID; } set { if (_ID == 0) _ID = value; } }
        public string Name { get; set; }
        public string QuantityPerUnit { get; set; }
        public decimal UnitPrice { get; set; }
        public int UnitsInStock { get; set; }
        public int UnitsOnOrder { get; set; }
        public int ReorderLevel { get; set; }
    }
}
