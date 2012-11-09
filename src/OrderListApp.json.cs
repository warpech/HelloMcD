using System;
using Starcounter;

namespace HelloMcd {
    partial class OrderListApp : App {
        public void SetOrders() {
            SqlResult orders = Db.SQL("SELECT o FROM [Order] o");

            foreach (Order o in orders) {
                this.Orders.Add(new OrderAppApp() { Data = o });
            }
        }

        [Json.Orders]
        partial class OrderAppApp : App<Order> {
            
        }
    }
}