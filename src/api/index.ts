// fetch session list

export interface SessionData {
  currency: string,
  currencySymbol: string,
  unit: number,
  sessionLists: {
    quantity?: number,
    id: string,
    productName: string,
    inventory: number,
    price: number,
    cover: string,
    description: string
  }[]
}

export const getSessionLists = async (lang = 'en') => {
  return Promise.resolve<SessionData>(lang === 'en' ? {
    currency: 'usd',
    currencySymbol: '$',
    unit: 100,
    sessionLists: [
      {
        id: '1',
        productName: 'Starry Night',
        inventory: 4000,
        price: 7995,
        cover: 'https://demo.snipcart.com/images/starry-night.jpg',
        description: 'High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.'
      },
      {
        id: '2',
        productName: 'Magazine subscription',
        inventory: 114,
        price: 2000,
        cover: 'https://demo.snipcart.com/images/painting.jpg',
        description: 'Subscribe to our painter\'s magazine. You can opt-in for a weekly or monthly subscription.'
      },
      {
        id: '3',
        productName: 'Rosy-Fingered Dawn at Louse Point',
        inventory: 3334,
        price: 4995,
        cover: 'https://demo.snipcart.com/images/rosy.jpg',
        description: 'The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning\'s favourite places in Long Island.'
      }
    ]
  } : {
    currency: 'usd',
    currencySymbol: '$',
    unit: 100,
    sessionLists: [
      {
        id: '1',
        productName: '星夜',
        inventory: 4000,
        price: 7995,
        cover: 'https://demo.snipcart.com/images/starry-night.jpg',
        description: '荷兰后印象派画家文森特梵高的《星夜》高品质复制品。'
      },
      {
        id: '2',
        productName: '杂志订阅',
        inventory: 114,
        price: 2000,
        cover: 'https://demo.snipcart.com/images/painting.jpg',
        description: '订阅我们的画家杂志。 您可以选择每周或每月订阅。'
      },
      {
        id: '3',
        productName: '虱子点的玫瑰色黎明',
        inventory: 3334,
        price: 4995,
        cover: 'https://demo.snipcart.com/images/rosy.jpg',
        description: 'Louse Point 的 Rosy-Fingered Dawn 标题指的是威廉·德库宁在长岛最喜欢的地方之一。'
      }
    ]
  })
}

export const loginUser = async () => {

}