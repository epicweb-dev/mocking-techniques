import { OrderController, Order, Cart } from './order-controller.js'

test('creates an order when all items are in stock', () => {
  const controller = new OrderController()

  vi.spyOn(controller, 'isItemInStock').mockReturnValue(true)

  const cart: Cart = [
    {
      id: 4,
      name: 'Porcelain vase',
      quantity: 1,
    },
  ]
  const order = controller.createOrder({ cart })

  expect(order).toEqual<Order>({
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
  const controller = new OrderController()

  vi.spyOn(controller, 'isItemInStock').mockImplementation((item) => {
    return item.id === 4
  })

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
