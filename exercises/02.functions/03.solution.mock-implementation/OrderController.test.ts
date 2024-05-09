import { OrderController, Order } from './OrderController.js'

const isItemInStock = vi.spyOn(OrderController.prototype, 'isItemInStock')

afterEach(() => {
  isItemInStock.mockClear()
})

afterAll(() => {
  vi.restoreAllMocks()
})

it('creates an order when all items are in stock', () => {
  isItemInStock.mockReturnValue(true)
  const order = new OrderController()

  expect(
    order.createOrder({
      cart: [
        {
          id: 4,
          name: 'Porcelain vase',
          quantity: 1,
        },
      ],
    }),
  ).toEqual<Order>({
    createdAt: expect.any(Date),
    cart: [
      {
        id: 4,
        name: 'Porcelain vase',
        quantity: 1,
      },
    ],
  })
})

it('throws an error when one of the items is out of stock', () => {
  isItemInStock.mockImplementation((item) => {
    // Only the item with ID 4 is considered in stock.
    return item.id === 4
  })

  const order = new OrderController()

  // Includes a single out-of-stock item's ID in the error "cause".
  expect(() =>
    order.createOrder({
      cart: [
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
      ],
    }),
  ).toThrowError('Failed to create an order: found out of stock items (5, 6)')
})
