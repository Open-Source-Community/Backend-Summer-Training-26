// ==========================================
// Part 1 Solution – Menu Item Interface
// ==========================================
interface MenuItem {
    name: string;
    price: number;
    quantity: number;
}


// ==========================================
// Part 2 Solution – Inventory
// ==========================================
const inventory: MenuItem[] = [
    { name: "Burger", price: 120, quantity: 10 },
    { name: "Pizza", price: 180, quantity: 6 },
    { name: "Fries", price: 50, quantity: 20 },
    { name: "Pasta", price: 140, quantity: 8 },
    { name: "Cola", price: 30, quantity: 25 }
];


// ==========================================
// Part 3 Solution – Order Type & Status
// ==========================================
enum OrderStatus {
    Pending,
    Preparing,
    Ready,
    Delivered
}

type Order = {
    items: MenuItem[];
    totalPrice: number;
    status: OrderStatus;
};

const orders: Order[] = [
    {
        items: [
            { name: "Burger", price: 120, quantity: 2 },
            { name: "Cola", price: 30, quantity: 2 }
        ],
        totalPrice: 300,
        status: OrderStatus.Pending
    },
    {
        items: [
            { name: "Pizza", price: 180, quantity: 1 },
            { name: "Fries", price: 50, quantity: 1 }
        ],
        totalPrice: 230,
        status: OrderStatus.Preparing
    },
    {
        items: [
            { name: "Pasta", price: 140, quantity: 2 }
        ],
        totalPrice: 280,
        status: OrderStatus.Ready
    }
];


// ==========================================
// Part 4 Solution – Incoming Order Checker (Timers)
// ==========================================
function checker(): void {
    const interval = setInterval(() => {
        console.log("Checking for incoming orders...");

        const pendingOrder = orders.find(
            order => order.status === OrderStatus.Pending
        );

        if (pendingOrder) {
            console.log("New pending order found!");
            clearInterval(interval);
        }
    }, 5000);
}

// ==========================================
// Part 5 Solution – Order Preparation (Async/Await)
// ==========================================
async function checkAvailability(order: Order): Promise<boolean> {
    
    for (const item of order.items) {
        const stock = inventory.find(i => i.name === item.name);
        if (!stock || stock.quantity < item.quantity) {
            return false;
        }
    }
    console.log("Availability checked.");
    return true;
}

async function packOrder(order: Order): Promise<void> {
    
    for (const item of order.items) {
        const stock = inventory.find(i => i.name === item.name);
        if (stock) {
            stock.quantity -= item.quantity;
        }
    }
    console.log("Order packed, inventory updated.");
}

async function prepareMeal(order: Order): Promise<void> {
    order.status = OrderStatus.Preparing;
    console.log("Preparing order...");

    const isAvailable = await checkAvailability(order);
    if (!isAvailable) {
        console.log("Not enough stock to prepare this order.");
        return;
    }

    await packOrder(order);

    order.status = OrderStatus.Ready;
    console.log("Order is ready!");
}


// ==========================================
// Part 6 Solution – Notify the Delivery Driver 
// ==========================================
function deliverOrder(order: Order): void {
    if (order.status !== OrderStatus.Ready) {
        console.log("Not Ready");
        return;
    }
    order.status = OrderStatus.Delivered;
    console.log("Order delivered!");

    console.log("Final status:", OrderStatus[order.status]);
}
export {
    inventory,
    orders,
    OrderStatus,
    checker,
    checkAvailability,
    packOrder,
    prepareMeal,
    deliverOrder,

};
export type { Order };
export type { MenuItem };
