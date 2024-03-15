import { GoodsForYouQuiz } from '@/features/GoodsForYouQuiz';
import cls from './HomePage.module.scss';
import { Text } from '@/shared/ui/Text';
import clsx from 'clsx';
import AboutImg from '@/shared/assets/images/man_in_sneakers.png';
import { Cite } from '@/shared/ui/Cite';
import { Button } from '@/shared/ui/Button';
import { Accordion } from '@/shared/ui/Accordion';
import { Catalog } from '@/widgets/Catalog';
import { Teammate } from '@/entities/Team';

export const HomePage = () => {
  return (
    <>
      <section className={clsx(cls.section_purple, cls.section_hero)}>
        <div className="container">
          <Text as='h1' color='white' className='mb-4'>
            <>
              Any products from famous brands
              <br />
              with worldwide delivery
            </>
          </Text>
          <Text as='p' color='white' wieght='semibold'>
            <>
              We sell smartphones, laptops, clothes, shoes
              <br />
              and many other products at low prices
            </>
          </Text>
          <Button size='l' className='ml-4 mt-10'>Go to shopping</Button>
        </div>
      </section>

      <section className={cls.section}>
        <div className="container">
          <Catalog />
        </div>
      </section>
      
      <section className={clsx(cls.section, cls.section_purple, cls.section_about)}>
        <div className={clsx('container', cls.about_container)}>
          <div className={clsx(cls.about_content, 'pl-1')}>
            <Text as='h2' color='white' wieght='bold' className='mb-2'>About us</Text>
            <Cite author='Goods4you' color='white'>
              <>
                Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products.
                <br />
                But we will help you make the right choice!
              </>
            </Cite>
          </div>
          <div>
            <img src={AboutImg} alt="Man in sneakers and orange socks" />
          </div>
        </div>
      </section>
      <section className={clsx(cls.section, 'pt-15', 'pb-15')}>
        <div className="container">
          <GoodsForYouQuiz />
        </div>
      </section>
      <section className={cls.section_purple}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px'}}>
            <Teammate name='Petr' position='Tsar' />
            <Teammate name='Petr' position='Tsar' />
            <Teammate name='Petr' position='Tsar' />
            <Teammate name='Petr' position='Tsar' />
            <Teammate name='Petr' position='Tsar' />
            <Teammate name='Petr' position='Tsar' />
          </div>
        </div>
      </section>
      <section className={cls.section}>
        <div className="container">
          <Text as='h2' wieght='bold'>FAQ</Text>  
          <Accordion title="Question 1">
            Long answer to the first question
          </Accordion>
          <Accordion title="Question 2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sunt, illo officia tempora itaque ducimus ut, a praesentium aperiam velit omnis fuga eveniet qui ratione officiis, placeat at iusto facilis?
          </Accordion>
        </div>
      </section>
    </>
  );
}