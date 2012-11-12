using System;
using Starcounter;

partial class OrderApp : App<Order> {
    protected override void OnData() {
        if (Items.Count == 0)
            Items.Add(new OrderItem() { Order = this.Data, Quantity = 1 });
    }

    void Handle(Input.Items.Product._Search search) {
        search.App._Options = SQL("SELECT p FROM Product p WHERE Description LIKE ?", search.Value + "%");
    }

    void Handle(Input.Items.Product._Options.Pick pick) {
        ((App)pick.App.Parent.Parent).Data = pick.App.Data;
        this.Items.Add(new OrderItem() { Order = this.Data, Quantity = 1 }); // Add a new empty row;
    }

    void Handle(Input.Save save) {
        Commit();
    }

    void Handle(Input.Cancel cancel) {
        Abort();
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

    [Json.Items]
    partial class OrderItemApp : App<OrderItem> {
    }
}