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
    private static long nextOrderNo = -1;
    
    public long OrderNo;
    public decimal Total {
        get {
            // TODO: 
            // This query returns a CompositeObject and not the value.
            //                return (decimal)Db.SlowSQL("SELECT Sum(Price*Quantity) FROM OrderItem WHERE [Order]=?", this).First;

            try {
                CompositeObject co = Db.SlowSQL("SELECT Sum(Price*Quantity) FROM OrderItem item WHERE item.[Order]=?", this).First;
                return (decimal)co.GetDecimal(0).Value;
            } catch {
                return 0;
            }
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

    public void AssignOrderNo() {
        if (nextOrderNo == -1) {
            // TODO:
//            nextOrderNo = (long)Db.SlowSQL("SELECT Max(OrderNo) FROM [Order]").First + 1;
            try {
                CompositeObject co = Db.SlowSQL("SELECT Max(OrderNo) FROM [Order]").First;
                nextOrderNo = (long)co.GetInt64(0) + 1;
            } catch {
                nextOrderNo = 1;
            }
        }
        OrderNo = nextOrderNo++;
    }
}

public class OrderItem : Entity {
    public Order Order;
    public Product Product;
    public decimal Price;
    public int Quantity;
}