
export const useMenu = () => {
    return useState('menu', () => [
        {

            primaryMenu:
                [
                    
                    {
                        name: 'About',
                        slug: 'about'
                    },
                    {
                        name: 'Contact',
                        slug: 'contact'
                    }
                ]
        },
        {
            category: [
                {
                    name: 'Appliances',
                    slug: 'appliances',
                    child: [
                        {
                            name: 'Sterilizer',
                            slug: 'sterilizer'
                        },
                        {
                            name: 'Milk Warmer',
                            slug: 'milk-warmer'
                        },
                        {
                            name: 'Warmer Jug',
                            slug: 'warmer-jug'
                        },
                        {
                            name: 'Steam Cooker',
                            slug: 'steam-cooker'
                        },
                        {
                            name: 'Slow Cooker',
                            slug: 'slow-cooker'
                        },
                        {
                            name: 'Hair Trimmer',
                            slug: 'hair-trimmer'
                        },
                        {
                            name: 'Cookware Set',
                            slug: 'cookware-set'
                        }
                    ]
                },
                {
                    name: 'Feeding',
                    slug: 'feeding',
                    child: [
                        {
                            name: 'Feeding Bottles & Accesorries',
                            slug: 'feeding-bottles-accesorries',
                        },
                        {
                            name: 'Cup & Bottle Sipper',
                            slug: 'cup-bottle-sipper',
                        },
                        {
                            name: 'Teether',
                            slug: 'teether',
                        },
                        {
                            name: 'Pacifier',
                            slug: 'Pacifier',
                        },
                        {
                            name: 'Other Accessories',
                            slug: 'other-accessories',
                        },
                        {
                            name: 'Feeding Utilities',
                            slug: 'feeding-utilities',
                        },
                        {
                            name: 'Bottle Brush',
                            slug: 'bottle-brush',
                        },
                    ]
                },
                {
                    name: 'Big Articles ',
                    slug: 'big-articles',
                    child: [
                        {
                            name: 'Stroller',
                            slug: 'stroller'
                        },
                        {
                            name: 'Feeding Chair',
                            slug: 'feeding-chair'
                        }
                    ]
                },
                {
                    name: 'Baby Carrier ',
                    slug: 'baby-carrier '
                },
                {
                    name: 'Nursing',
                    slug: 'nursing',
                    child: [
                        {
                            name: 'Breast Pad',
                            slug: 'breast-pad'
                        },
                        {
                            name: 'Breast Pump',
                            slug: 'breast-pump'
                        }
                    ]
                },
                {
                    name: 'Hygiene',
                    slug: 'hygiene',
                    child: [
                        {
                            name: 'Cotton Bud',
                            slug: 'Ccotton-bud'
                        },
                        {
                            name: 'Potty',
                            slug: 'potty'
                        },
                        {
                            name: 'Bathing Accesories',
                            slug: 'bathing-accesories'
                        },
                        {
                            name: 'Toothbrush',
                            slug: 'toothbrush'
                        },
                        {
                            name: 'Nasal Aspirator',
                            slug: 'nasal-aspirator'
                        }
                    ]
                }
            ]
        }
    ])
}
