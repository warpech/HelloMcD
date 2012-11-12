using System;
using Starcounter;

namespace HelloMcd {
    partial class OrderListApp : App {
        [Json.Orders]
        partial class OrderAppApp : App<Order> {
        }
    }
}