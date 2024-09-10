import { OrderController, Order, Cart } from './order-controller.js'

test('creates an order when all items are in stock', () => {
  const controller = new OrderController()

  // 🐨 Spy on the `controller.isItemInStock` method and mock its
  // implementation to always return true in this test.
  // 💰 <mock>.mockReturnValue(true)

  const cart: Cart = [
    {
      id: 4,
      name: 'Porcelain vase',
      quantity: 1,
    },
  ]
  const order = controller.createOrder({ cart })

  // 🐨 Write an assertion on "order" to make sure that
  // it equals to the expected order object.
  // 💰 expect(order).toEqual<Order>(expected)
})

test('throws an error when one of the items is out of stock', () => {
  const controller = new OrderController()

  // 🐨 Spy on the `controller.isItemInStock` method and mock its
  // implementation to only return true if the checked "item.id" equals 4.
  // 💰 <mock>.mockImplementation(item => {})

  const cart: Cart = [
    {
      id: 4,
      name: 'Porcelain vase',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Sofa',
      quantity: 3,
    },
    {
      id: 6,
      name: 'Microwave',
      quantity: 1,
    },
  ]

  // 🐨 Write an assertion on calling the ".createOrder()"
  // method call to throw with the expected error message.
  // 💰 expect(() => controller.createOrder({ cart })).toThrowError(error)
  // 💰'Failed to create an order: found out of stock items (5, 6)'
})
