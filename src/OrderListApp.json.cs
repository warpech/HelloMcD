using System;
using Starcounter;

partial class OrderListApp : App {
    [Json.Orders]
    partial class OrderAppApp : App<Order> {
    }
}