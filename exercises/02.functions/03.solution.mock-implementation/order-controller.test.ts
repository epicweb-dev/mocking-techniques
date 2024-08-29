import { OrderController, Order, Cart } from './order-controller.js'

const isItemInStock = vi.spyOn(OrderController.prototype, 'isItemInStock')

afterEach(() => {
  isItemInStock.mockReset()
})

afterAll(() => {
  vi.restoreAllMocks()
})

test('creates an order when all items are in stock', () => {
  isItemInStock.mockReturnValue(true)
  const controller = new OrderController()
  const cart: Cart = [
    {
      id: 4,
      name: 'Porcelain vase',
      quantity: 1,
    },
  ]
  const order = controller.createOrder({ cart })

  expect(order).toEqual<Order>({
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

test('throws an error when one of the items is out of stock', () => {
  isItemInStock.mockImplementation((item) => {
    return item.id === 4
  })

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

  expect(() => controller.createOrder({ cart })).toThrowError(
    'Failed to create an order: found out of stock items (5, 6)',
  )
})
