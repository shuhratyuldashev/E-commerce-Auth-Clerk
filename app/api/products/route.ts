import { NextResponse } from "next/server";

export async function GET(req: Request) {
   try {
    return NextResponse.json([
        {
            category: "Кровати",
            products: [
                {
                    id: 11,
                    name: 'Кровать 1', 
                    price: 2100000,
                    description: 'Lorem ipsum dolor sit amet  consectetur adipisicing elit. Eos dolorem  recusandae pariatur consequuntur saepe  eligendi assumenda obcaecati corrupti  dolor debitis? ',
                    img: '/assets/imgs_products/beds/bed_1.jpg',
                    count: 1,
                    linkId: 1
                  }, 
                  {
                    id: 12,
                    name: 'Кровать 2',
                    price: 2200000,
                    img: '/assets/imgs_products/beds/bed_2.jpg',
                    description: 'Lorem ipsum dolor sit amet  consectetur adipisicing elit. Eos dolorem  recusandae pariatur consequuntur saepe  eligendi assumenda obcaecati corrupti  dolor debitis? ',
                    count: 1,
                    linkId: 2
                   },
                  {
                    id: 13,
                    name: 'Кровать 3',
                    price: 23000000,
                    img: '/assets/imgs_products/beds/bed_3.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem recusandae pariatur consequuntur saepe eligendi assumenda obcaecati corrupti dolor debitis?',
                    count: 1,
                    linkId: 3

                  },{
                    id: 14,
                    name: 'Кровать 4',
                    price: 24000000,
                    img: '/assets/imgs_products/beds/bed_4.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem recusandae pariatur consequuntur saepe eligendi assumenda obcaecati corrupti dolor debitis?',
                    count: 1,
                    linkId: 4
                  }
            ]
        },
        {
            category: "Кресла",
            products:[
                {
                    id: 21,
                    name: 'Кресло 1', 
                    price: 3100000,
                    img: '/assets/imgs_products/chairs/chair_1.jpg',
                    count: 1,
                    linkId: 5
                  },
                  {
                    id: 22,
                    name: 'Кресло 2',
                    price: 3200000,
                    img: '/assets/imgs_products/chairs/chair_2.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem recusandae pariatur consequuntur saepe eligendi assumenda obcaecati corrupti dolor debitis?',
                    count: 1,
                    linkId: 6
                   },
                  {
                    id: 23,
                    name: 'Кресло 3',
                    price: 33000000,
                    img: '/assets/imgs_products/chairs/chair_3.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem recusandae pariatur consequuntur saepe eligendi assumenda obcaecati corrupti dolor debitis?',
                    count: 1,
                    linkId: 7
                  },{
                    id: 24,
                    name: 'Кресло 4',
                    price: 34000000,
                    img: '/assets/imgs_products/chairs/chair_4.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem recusandae pariatur consequuntur saepe eligendi assumenda obcaecati corrupti dolor debitis?',
                    count: 1,
                    linkId: 8
                  }
            ]
        },
        {
            category: "Диваны",
            products:[
                {
                    id: 31,
                    name: 'Диван 1', 
                    price: 5100000,
                    img: '/assets/imgs_products/sofas/sofa_1.jpg',
                    count: 1,
                    linkId: 9
                  },
                  {
                    id: 32,
                    name: 'Диван 2',
                    price: 5200000,
                    img: '/assets/imgs_products/sofas/sofa_2.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem recusandae pariatur consequuntur saepe eligendi assumenda obcaecati corrupti dolor debitis?',
                    count: 1,
                    linkId: 10
                   },
                  {
                    id: 33,
                    name: 'Диван 3',
                    price: 53000000,
                    img: '/assets/imgs_products/sofas/sofa_3.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem recusandae pariatur consequuntur saepe eligendi assumenda obcaecati corrupti dolor debitis?',
                    count: 1,
                    linkId: 11
                  },{
                    id: 34,
                    name: 'Диван 4',
                    price: 54000000,
                    img: '/assets/imgs_products/sofas/sofa_4.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem recusandae pariatur consequuntur saepe eligendi assumenda obcaecati corrupti dolor debitis?',
                    count: 1,
                    linkId: 12
                }
            ]
        }
    ])
   } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ error: "An error occurred while fetching data" }, { status: 500 });
   }
}