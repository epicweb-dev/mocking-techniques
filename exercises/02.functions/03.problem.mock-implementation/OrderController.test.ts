import { OrderController, Order, Cart } from './OrderController.js'

// 🐨 Create a spy on the "OrderController.prototype.isItemInStock" method
// and assign it to a variable named "isItemInStock".
// 💰 const isItemInStock = vi.spyOn(object, method)

// 🐨 Add an "afterEach" hook that will clear the "isItemInStock" mock
// function (i.e. reset the recorded calls information).
// 💰 afterEach(callback)
// 💰 <mock>.mockClear()

// 🐨 Add an "afterAll" hook to restore all mocks in the test.
// 💰 afterAll(callback)
// 💰 vi.restoreAllMocks()

it('creates an order when all items are in stock', () => {
  // 🐨 Mock the return value of the "isItemInStock" mock function
  // to always return true.
  // 💰 <mock>.mockReturnValue(true)

  const controller = new OrderController()
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

it('throws an error when one of the items is out of stock', () => {
  // 🐨 Mock the implementation of the "isItemInStock" mock function
  // to only return true if the "item.id" equals 4.
  // 💰 <mock>.mockImplementation(item => {})

  const controller = new OrderController()
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
