using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServerSQLDB.dal;

namespace ServerSQLDB.entities
{
    public class MainManager
    {
        public Hashtable ProductsList= new Hashtable();
        private MainManager() { }

        private static readonly MainManager _Instance = new MainManager();
        public static MainManager Instance { get { return _Instance; } }
        private Products ProductsData = new Products();
        public UserMessages userMessages= new UserMessages();
        public DeleteProductById del = new DeleteProductById();
        
        public void Init() {
            ProductsData.LoadProducts();
        }
    }
}
