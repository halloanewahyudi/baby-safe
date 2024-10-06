// composables/useProduct.js
export const useProduct = () => {
    const products = useState('products', () => [
      {
        name: 'Warmer Jug',
        image: 'https://www.babysafe.co.id/pic/lb013_content_337.jpg',
        description: 'Susu yang kepanasan tidak hanya sulit diminum oleh si kecil tapi juga menyebabkan berkurang bahkan rusaknya nutrisi dalam susu.',
        category: 'appliances'
      },
      {
        name: 'BabySafe Cookware Set',
        image: 'https://www.babysafe.co.id/pic/cw001_content_780.jpg',
        description: 'BabySafe Cookware Set merupakan peralatan memasak premium.',
        category: 'appliances'
      },
      {
        name: 'Milk Warmer',
        image: 'https://www.babysafe.co.id/pic/produk_content_335.jpg',
        description: 'Memberikan susu dengan kehangatan yang pas layaknya ASI alami.',
        category: 'appliances'
      },
      {
        name: 'Teether',
        image: 'https://www.babysafe.co.id/pic/teether_content_635.png',
        description: 'Gigitan bayi yang dirancang untuk menenangkan gusi.',
        category: 'feeding'
      },
      {
        name: 'Pacifier',
        image: 'https://www.babysafe.co.id/pic/icon_content_771.jpg',
        description: 'Empeng bayi dengan lubang sirkulasi udara.',
        category: 'feeding'
      },
      {
        name: 'Feeding Utilities',
        image: 'https://www.babysafe.co.id/pic/fs5003_content_376.png',
        description: 'Set peralatan makan bayi dengan material aman.',
        category: 'feeding'
      },
      {
        name: 'Stroller',
        image: 'https://www.babysafe.co.id/pic/test_content_381.png',
        description: 'Kereta dorong bayi dengan desain modern.',
        category: 'feeding'
      },
      {
        name: 'Breast Pad',
        image: 'https://www.babysafe.co.id/pic/1_content_578.png',
        description: 'Bantalan penyerap kelebihan air susu Ibu (ASI).',
        category: 'nursing'
      }
    ])
  
    return {
      products
    }
  }
  