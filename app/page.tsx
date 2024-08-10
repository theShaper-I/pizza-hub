import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Всі піцци' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />

      <Container className='pb-14 mt-10'>
        <div className='flex gap-[100px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title={"Піци"}
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Капрічоза",
                    imageUrl:
                      "https://prontopizza.ua/wp-content/uploads/2021/07/kaprichoza-1-300x300.webp",
                    price: 193,
                    items: [{ price: 193 }],
                  },
                  {
                    id: 2,
                    name: "Капрічоза",
                    imageUrl:
                      "https://prontopizza.ua/wp-content/uploads/2021/07/kaprichoza-1-300x300.webp",
                    price: 193,
                    items: [{ price: 193 }],
                  },
                  {
                    id: 3,
                    name: "Капрічоза",
                    imageUrl:
                      "https://prontopizza.ua/wp-content/uploads/2021/07/kaprichoza-1-300x300.webp",
                    price: 193,
                    items: [{ price: 193 }],
                  },
                  {
                    id: 4,
                    name: "Капрічоза",
                    imageUrl:
                      "https://prontopizza.ua/wp-content/uploads/2021/07/kaprichoza-1-300x300.webp",
                    price: 193,
                    items: [{ price: 193 }],
                  },
                ]}
              />

              <ProductsGroupList
                title={"Сніданок"}
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Капрічоза",
                    imageUrl:
                      "https://prontopizza.ua/wp-content/uploads/2021/07/kaprichoza-1-300x300.webp",
                    price: 193,
                    items: [{ price: 193 }],
                  },
                  {
                    id: 2,
                    name: "Капрічоза",
                    imageUrl:
                      "https://prontopizza.ua/wp-content/uploads/2021/07/kaprichoza-1-300x300.webp",
                    price: 193,
                    items: [{ price: 193 }],
                  },
                  {
                    id: 3,
                    name: "Капрічоза",
                    imageUrl:
                      "https://prontopizza.ua/wp-content/uploads/2021/07/kaprichoza-1-300x300.webp",
                    price: 193,
                    items: [{ price: 193 }],
                  },
                  {
                    id: 4,
                    name: "Капрічоза",
                    imageUrl:
                      "https://prontopizza.ua/wp-content/uploads/2021/07/kaprichoza-1-300x300.webp",
                    price: 193,
                    items: [{ price: 193 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
