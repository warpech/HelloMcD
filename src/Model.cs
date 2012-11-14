using System.Collections;
using Starcounter;
using Starcounter.Query.Execution;

public class Product : Entity {
    public string Image;
    public string ProductId;
    public string Description;
    public decimal Price;
}

public class Order : Entity {
    // TODO:
    // OrderNo should be assigned after the order is committed, but for 
    // debugging purposes now it's assigned in a really unsafe way here.
    private static long NextOrderNo = 1;
    public Order() { OrderNo = NextOrderNo++; }

    public long OrderNo;
    public decimal Total {
        get {
            // TODO: 
            // This query returns a CompositeObject and not the value.
            //                return (decimal)Db.SlowSQL("SELECT Sum(Price*Quantity) FROM OrderItem WHERE [Order]=?", this).First;

            // TODO:
            // This doesn't seem to work either. NotSupportedException is thrown. 
            //return (decimal)Db.SlowSQL("SELECT Sum(Price*Quantity) FROM OrderItem WHERE [Order]=?", this).First.GetDecimal(0);

            CompositeObject co = Db.SlowSQL("SELECT Sum(Price*Quantity) FROM OrderItem item WHERE item.[Order]=?", this).First;
            return (decimal)co.GetDecimal(0).Value;                
        }
    }

    // TODO:
    // SqlResult is not generic and you cannot cast directly to a generic type from a non-generic one.
//        public IEnumerable<OrderItem> Items {
    public IEnumerable Items {
        get {
            return Db.SQL("SELECT item FROM OrderItem item WHERE item.[Order]=?", this);
        }
    }
}

public class OrderItem : Entity {
    public Order Order;
    public Product Product;
    public decimal Price;
    public int Quantity;
}