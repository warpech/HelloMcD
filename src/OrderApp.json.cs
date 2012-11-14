using System;
using Starcounter;

partial class OrderApp : App<Order> {
    static void Main() {
        SampleDataImporter.Run();
        GET("/new-order", () => new OrderApp(() => new Order()) { View = "order.html" });
        GET("/orders", () => new OrderListApp(() => null) { Orders = Db.SQL("SELECT o FROM [Order] o"), View = "orders.html" });
        GET("/orders/@i", (int orderNo) => new OrderApp(() => Db.SQL("SELECT o FROM [Order] o WHERE o.OrderNo=?", orderNo).First) { View = "order.html" });
    }

    protected override void OnData() {
        if (Items.Count == 0)
            Items.Add(new OrderItem() { Order = this.Data, Quantity = 1 });
    }

    void Handle(Input.Items.Product._Search search) {
        search.App._Options = SQL("SELECT p FROM Product p WHERE Description LIKE ?", search.Value + "%");
    }

    void Handle(Input.Items.Product._Options.Pick pick) {
        ((App)pick.App.Parent.Parent).Data = pick.App.Data;

        // TODO:
        // The databinding should take care of this. Needs to be implemented.
        ((OrderItemApp)pick.App.Parent.Parent.Parent).Data.Product = pick.App.Data;

        this.Items.Add(new OrderItem() { Order = this.Data, Quantity = 1 }); // Add a new empty row;
    }

    void Handle(Input.Save save) {
        Commit();
        Data = new Order();
    }

    void Handle(Input.Cancel cancel) {
        Abort();
        Data = new Order();
    }

    // TODO:
    // To be removed when the autorefresh is in place.
    void Handle(Input.Items.Quantity qtyChange) {
        Refresh(Template.Total);
    }

    [Json.Items.Product]
    partial class OrderItemProductApp : App<Product> {
        protected override void OnData() {
            this._Search = Data.Description;
                
            OrderItemApp item = (OrderItemApp)this.Parent;
            item.Price = Data.Price;
                
            // TODO:
            // Remove when autorefresh is in place.
            OrderApp order = (OrderApp)this.Parent.Parent.Parent;
            order.Refresh(order.Template.Total);
        }
    }
    [Json.Items.Product._Options]
    partial class OptionsApp : App<Product> { }
    [Json.Items]
    partial class OrderItemApp : App<OrderItem> { }
}
